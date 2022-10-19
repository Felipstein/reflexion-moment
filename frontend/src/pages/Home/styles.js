import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  max-width: 640px;
  margin: auto;
  margin-top: 4.8rem;
  padding: 0 1.6rem;

  margin-bottom: 6.4rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.2rem;

  .error-content {

    .error-message {
      h3 {
        font-weight: 600;
        font-size: 4.8rem;
      }

      p {
        font-size: 2.4rem;

        strong {
          font-weight: 600;
        }
      }
    }

    #btn-try-again {
      margin-top: 1.6rem;
      position: relative;
    }
  }

  @media screen and (max-width: 1054px) {
    img {
      transform: scale(75%);
    }

    gap: 0.4rem;

    .error-content .error-message {
      h3 {
        font-size: 3.2rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 820px) {
    img {
      position: fixed;
    }

    .error-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .error-message {
        h3 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      }
    }

    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 430px) {
    #btn-try-again {
      font-size: 1.2rem;
    }
  }
`;
