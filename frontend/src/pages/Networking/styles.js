import styled from 'styled-components';

export const Container = styled.div`

  .floating-button-container {
    position: fixed;

    bottom: 12.5rem;
    left: 24rem;

    background-color: red;

    @media screen and (max-width: 460px) {
      left: 50%;
      transform: translateX(-28px);
    }
  }
`;
