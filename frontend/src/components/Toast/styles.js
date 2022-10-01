import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const variant = {
  warn: css`
    border-color: ${({ theme }) => theme.colors.danger.main};

    &:hover {
      border-color: ${({ theme }) => theme.colors.danger.dark};
    }
  `,
};

export const Container = styled(motion.div)`
  max-width: 60rem;
  min-width: 28rem;
  padding: 1.2rem 2.4rem;

  color: ${({ theme }) => theme.colors.text};
  font-size: 2.4rem;
  font-weight: 500;

  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  border-bottom: 0.4rem solid transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #icon {
    margin-right: 1rem;

    width: 2.8rem;
    height: 2.8rem;
  }

  &:hover {
    cursor: pointer;
    color: #fff;

    border-color: ${({ theme }) => theme.colors.text};
  }

  & + & {
    margin-top: 1rem;
  }

  ${({ type }) => variant[type]}

  @media screen and (max-width: 540px) {
    font-size: 1.8rem;

    #icon {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
