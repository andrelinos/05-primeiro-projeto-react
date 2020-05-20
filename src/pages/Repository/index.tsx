import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues, LoadingPage } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: string;
  open_issues_count: number;
  subscribers_count: number;
  network_count: number;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <Link to={repository?.owner.html_url}>
              <img
                src={repository?.owner.avatar_url}
                alt={repository?.owner.login}
              />
            </Link>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            {repository.stargazers_count ? (
              <li>
                <strong>{repository?.stargazers_count}</strong>
                <span>Start</span>
              </li>
            ) : null}

            {repository.watchers_count ? (
              <li>
                <strong>{repository.watchers_count}</strong>
                <span>Watchers</span>
              </li>
            ) : null}

            {repository.forks_count ? (
              <li>
                <strong>{repository?.forks_count}</strong>
                <span>Forks</span>
              </li>
            ) : null}

            {repository.network_count ? (
              <li>
                <strong>{repository.network_count}</strong>
                <span>Network</span>
              </li>
            ) : null}

            {repository.subscribers_count ? (
              <li>
                <strong>{repository.subscribers_count}</strong>
                <span>Subscribers</span>
              </li>
            ) : null}

            {repository.open_issues_count ? (
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            ) : null}
          </ul>
        </RepositoryInfo>
      ) : (
        <LoadingPage>
          <ReactLoading type="bars" color="#7159c1" height="20%" width="20%" />
        </LoadingPage>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
