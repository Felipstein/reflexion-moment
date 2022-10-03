import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  ${({
    size, location: {
      position, top, left, transform,
    },
  }) => css`
    img {
      width: ${size};
      height: ${size};
    }

    position: ${position};
    top: ${top};
    left: ${left};
    transform: ${transform};
  `}

  z-index: ${({ zIndex }) => zIndex};
  user-select: none;
`;
