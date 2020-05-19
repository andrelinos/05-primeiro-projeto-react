import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgba(47, 53, 66, 0.9) url(${githubBackground}) no-repeat 70% top;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    max-width: 994px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
