import styled from 'styled-components';

export const Container = styled.header`
  width: 50vw;
  max-width: 640px;
  margin: auto;
  padding: 0 1.6rem;

  .header-content {
    margin-top: 4.8rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
      color: ${({ theme }) => theme.colors.text};
    }

    .menu-actions {
      display: flex;
      flex-direction: column;
      align-items: center;

      #btn-menu-dropdown {
        background-color: transparent;
        border: none;
        outline: 0;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 0.8rem;

        z-index: 6;

        h2 {
          color: ${({ theme }) => theme.colors.text};
          font-weight: 400;
          font-size: 2.4rem;
          margin-right: 0.4rem;
        }

        .menu-dropdown-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &:hover {
          h2, svg {
            color: #d1d5db;
          }
        }
      }

      #btn-new-post {
        width: 18rem;
        height: 4.5rem;
      }

    }

    @media screen and (max-width: 720px) {
      flex-direction: column;
      align-items: center;

      .menu-actions {
        margin-top: 2.4rem;
      }
    }
  }
`;

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.card};
  height: 2px;

  margin-top: 3.2rem;
`;
