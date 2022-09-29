import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({
    size, location: {
      position, top, left, transform,
    },
  }) => css`
    width: ${size}px;
    height: ${size}px;

    position: ${position};
    top: ${top};
    left: ${left};
    transform: ${transform};
  `}

  z-index: -1;
`;
