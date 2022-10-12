import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  max-width: 640px;
  margin: auto;
  margin-top: 4.8rem;
  padding: 0 1.6rem;
`;

export const Header = styled.header`
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
  `;

export const DropdownMenuContainer = styled.div`
  position: fixed;
  transform: translate(6rem, 4.2rem);

  z-index: 4;
`;
