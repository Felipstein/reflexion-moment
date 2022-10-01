import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  margin-top: 12.5vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-height: 740px) {
    margin-top: 8vh;
  }
`;

export const Container = styled(motion.div)`
  margin-top: 7vh;
  padding: 2.4rem 4rem;

  width: 65rem;

  background-color: ${({ theme }) => theme.colors.backgrounds.card};
  border-radius: 5px;

  .wrapped-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

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
        }

        .form-lost-password {
          outline: 0;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.4);
          transition: color 70ms ease-in;

          &:hover {
            color: #eee;
          }

          &[disabled] {
            color: rgba(255, 255, 255, 0.2) !important;
            cursor: default;
            pointer-events: none;
          }
        }

        .form-main-actions {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          width: 100%;
          margin-top: 2rem;

          .form-no-account {

            &.disabled {
              cursor: default;
              pointer-events: none;

              span {
                color: rgba(255, 255, 255, 0.6);
              }
            }

            span {
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
    }
  }
`;
