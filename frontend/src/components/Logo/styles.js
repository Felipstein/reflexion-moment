import styled, { css } from 'styled-components';

export const Container = styled.div`
  user-select: none;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;

    strong {
      display: block;

      color: ${({ blackWhite }) => (blackWhite ? '#82889e' : '#FFE1A8')};
      font-weight: 600;
    }
  }

  ${({ scale }) => css`
    h1 {
      font-size: calc(3.2rem * ${scale});
      line-height: calc(4.0rem * ${scale});

      strong {
        font-size: calc(4.6rem * ${scale});
      }
    }
  `}
`;
