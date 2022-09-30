import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  input {
    width: 100%;
    outline: 0;
    border: 2px solid transparent;
    border-radius: 10px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.effects.boxShadow};
    background-color: rgba(0, 0, 0, 0.3);
    padding: 12px 16px;
    transition-property: border-color, color;
    transition: 0.15s ease-in-out;

    &::placeholder {
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.5);
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.lighter}
    }
    
    &[disabled] {
      border-color: transparent;
      background-color: ${({ theme }) => theme.colors.disabled.darkBackground};
      color: ${({ theme }) => theme.colors.disabled.text};

      &::placeholder {
        color: rgba(255, 255, 255, 0.3)
      }
    }

    ${({ hasError, theme }) => hasError && css`
      border-color: ${theme.colors.danger.main} !important;
      color: ${theme.colors.danger.main} !important;      
    `}
  }
  small {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.danger.main}
  }
`;
