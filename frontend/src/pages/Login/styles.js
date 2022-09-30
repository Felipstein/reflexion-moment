import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  margin-top: 12.5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  padding: 2.4rem 4rem;
  margin-top: 7vh;

  width: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgrounds.card};
  border-radius: 5px;

  h1 {
    font-weight: 500;
    margin-bottom: 1.2rem;
    font-size: 3.2rem;
  }

  p {
    color: #eeeeeeaa;
    width: 50%;
    margin-bottom: 2.8rem;
    text-align: center;
    font-size: 1.8rem;
  }

  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .form-inputs {
      width: 100%;
      margin-bottom: 0.6rem;

      .form-input {
        width: 100%;
        margin-top: 1.2rem;
      }
    }

    .form-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 100%;

      a {
        text-decoration: none;

        small {
          font-size: 1.6rem;
          color: rgba(255, 255, 255, 0.65);
          transition: color 70ms ease-in;
  
          &:hover {
            color: #eee;
          }
        }
      }

      .form-main-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        margin-top: 2rem;

        .form-no-account span {
          font-size: 1.8rem;
          color: #ddd;
          border-bottom: 2px solid transparent;
          transition-property: color, border-color;
          transition: 70ms ease-in;

          &:hover {
            color: #fff;
            border-color: #ffffffaa;
          }
        }
      }
    }
  }
`;
