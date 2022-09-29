import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgrounds.main};
  }

  input, select, button {
    font-family: inherit;
  }

`;
