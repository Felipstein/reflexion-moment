import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.ul)`
  background-color: #fff;
  border-radius: 5px;
  padding: 0.8rem 0;

  min-width: 14rem;
  max-width: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  .dropdownmenu-item {
    background-color: transparent;
    border: none;
    outline: 0;
    outline-color: #000;
    cursor: pointer;
    padding: 0.6rem 1.6rem;

    width: 100%;

    font-size: 2rem;

    &:hover {
      background-color: #d1d5db;
    }

    &:active {
      background-color: #9ca3af;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.1rem;

  background-color: #d1d5db;
`;
