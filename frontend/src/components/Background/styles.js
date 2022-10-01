import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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

  z-index: -1;
  user-select: none;
`;
