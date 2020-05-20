import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #dfe4ea;
    transition: hover 0.2s;

    &:hover {
      color: ${shade(0.2, '#dfe4ea')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #dfe4ea;
      }

      p {
        font-size: 18px;
        color: #dfe4ea;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 55px;
      }

      strong {
        display: block;
        font-size: 26px;
        color: #dfe4ea;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #dfe4ea;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #57606f;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    border: 1px solid rgba(113, 89, 193, 0.6);

    & + a {
      margin-top: 16px;
    }

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      background: ${shade(0.2, 'rgba(87, 96, 111, 1)')};

      svg {
        background: ${shade(0.2, '#04d361')};
      }
    }

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #dfe4ea;
      }

      p {
        font-size: 1rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
    border-radius: 50%;
    border: 2px solid rgba(47, 53, 66, 0.5);
    width: 42px;
    height: 42px;
    transition: background 0.2s;
  }
`;

export const LoadingPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
