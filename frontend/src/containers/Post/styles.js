import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.card};
  border-radius: 5px;

  & + & {
    margin-top: 3.2rem;
  }
`;

export const TopContainer = styled.div`
  padding: 1.2rem 1.6rem 2.4rem 1.6rem;

  #post-title {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 2.0rem;
  }

  #post-content {
    font-size: 1.8rem;
    color: #eee;

    padding: 0 0.8rem;
  }
`;

export const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);

  padding: 1.2rem 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .post-left-info {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
  }

  .post-right-info {
    span {
      margin-right: 1.6rem;
      color: rgba(255, 255, 255, 0.2);
      font-weight: 500;
    }
  }
`;

export const Action = styled.button`
  background-color: transparent;
  outline: 0;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  .post-action-icon {
    color: rgba(255, 255, 255, 0.4);
    font-size: 2.4rem;
  }

  small {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
  }

  .comment, .share {
    color: #eee;
  }
`;
