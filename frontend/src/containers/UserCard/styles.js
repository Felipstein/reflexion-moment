import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  max-width: 144rem;
  margin: auto;
  margin-top: 6.4rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.backgrounds.card};

  overflow: hidden;
`;

export const Main = styled.main`
  padding: 1.6rem 2.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  #card-name {
    font-size: 3.2rem;
    font-weight: 600;
  }

  .card-date-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;

    #card-date-label {
      font-size: 1.8rem;
      font-weight: 600;
    }

    #card-date {
      font-size: 1.8rem;

      color: rgba(255, 255, 255, 0.6);
    }
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: center;

    #card-name {
      margin-bottom: 1.2rem;
    }

    .card-date-wrapper {
      align-items: center;
    }
  }
`;

export const Footer = styled.footer`
  padding: 1.2rem 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgrounds.cardFooter};

  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`;
