import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #dfe4ea;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    font-size: 1rem;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: none;
    position: relative;

    ${props =>
      props.hasError &&
      css`
        border-color: #e74c3c;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: none;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    border: 2px solid #04d361;
    border-left: none;

    &:hover {
      background: ${shade(0.2, '#04d361')};
      border-color: ${shade(0.2, '#04d361')};
      font-size: 1.25rem;
    }
  }
`;

export const Error = styled.span`
  display: block;
  padding: 7px;
  color: #e74c3c;
  position: absolute;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

      img {
        transform: scale(1.1);
        border: 2px solid ${shade(0.2, '#04d361')};
        background: transparent;
      }
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      padding: 5px;
      transition: transform 0.2s;
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

    svg {
      margin-left: auto;
      color: #cbcbd6;
      border-radius: 50%;
      border: 2px solid rgba(47, 53, 66, 0.5);
      width: 42px;
      height: 42px;
      transition: background 0.2s;
    }
  }
`;
