import styled, { css } from 'styled-components';

export const Container = styled.div`
  user-select: none;

  h1 {
    font-family: 'Montserrat', sans-serif;
    /* font-size: calc(3.2rem * 2); */
    font-weight: 500;
    /* line-height: calc(4.0rem * 2); */
    
    strong {
      /* font-size: calc(4.6rem * 2); */
      display: block;

      color: #FFE1A8;
      font-weight: 600;
    }
  }

  ${({ isBig }) => css`
    h1 {
      font-size: calc(3.2rem * ${isBig ? 2 : 1});
      line-height: calc(4.0rem * ${isBig ? 2 : 1});
      
      strong {
        font-size: calc(4.6rem * ${isBig ? 2 : 1});
      }
    }
  `}

`;
