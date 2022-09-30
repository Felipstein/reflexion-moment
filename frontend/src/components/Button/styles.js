import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  main: css`
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid transparent;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary.darker};
      background-color: ${({ theme }) => theme.colors.primary.lighter};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.light};
      background-color: rgba(238, 130, 113, 0.2);
    }

    &:active {
      border-color: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.darker};
      background-color: ${({ theme }) => theme.colors.primary.lighter};
    }
   `,
  card: css`
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondary.main};
    border: 2px solid transparent;

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.secondary.light};
    }

    &:active {
      color: #111;
      background-color: ${({ theme }) => theme.colors.secondary.lighter};
    }
  `,
};

export default styled(motion.button)`
  padding: 0.6rem 2.5rem;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;

  height: 4.5rem;

  font-size: 1.8rem;
  font-weight: 500;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  
  ${({ variant }) => variants[variant] || variants.main}

  &[disabled] {
    color: ${({ theme }) => theme.colors.disabled.text};
    background-color: ${({ theme }) => theme.colors.disabled.background};
    border: 2px solid transparent;
    text-shadow: none;
    cursor: default;
  }

  .loader {
    position: absolute;
    bottom: 3.25rem;
    left: 2.6rem;
  }

  ${({ loading }) => loading && css`
    .children {
      visibility: hidden;
    }
  `}
`;
