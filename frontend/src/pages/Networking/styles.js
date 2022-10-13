/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  max-width: 144rem;

  margin: 3.2rem auto 6.4rem auto;

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

export const Header = styled.header`
  margin-bottom: 3.2rem;

  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;

    #header-title {
      font-size: 4.0rem;
      font-weight: 500;
    }

    #header-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      border: none;
      border-radius: 50px;

      padding: 0.8rem;

      font-size: 4.8rem;
      color: rgba(255, 255, 255, 0.2);

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.2);
      }

      ${({ isSearchInputEnabled }) => isSearchInputEnabled && css`
          color: ${({ theme }) => theme.colors.text}
        `
      };
    }
  }
`;

export const NoUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 24rem;
    opacity: 0.5;
    margin-right: 1.6rem;
  }

  .left-content {
    margin: 0 2.8rem;

    h2 {
      font-weight: 600;
      font-size: 3.6rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 2.4rem;

      small {
        font-size: 1.6rem;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
      }
    }
  }


`;

export const NoUsersFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;


  span {
    font-size: 2.4rem;
    color: rgba(255, 255, 255, 0.6);
    overflow-wrap: break-word;
  }

  strong {
    font-weight: 600;
  }

  svg {
    margin-right: 1.2rem;
    font-size: 4.8rem;
    min-width: fit-content;
    color: ${({ theme }) => theme.colors.danger.main}
  }
`;
