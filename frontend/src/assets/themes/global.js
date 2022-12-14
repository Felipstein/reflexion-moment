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

  .app__box-shadow {
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
  }

  .app__drop-shadow {
    filter: drop-shadow(${({ theme }) => theme.effects.boxShadow});
  }

  .app__text-shadow {
    text-shadow: ${({ theme }) => theme.effects.textShadow};
  }

  .app__flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-height: 950px) {
    html {
      font-size: 50%;
    }    
  }

  @media (max-width: 1024px) {
    html {
      font-size: 50%;
    }    
  }

`;
