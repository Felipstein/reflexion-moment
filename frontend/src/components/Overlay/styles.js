import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  ${({
    rgba, blur, zIndex, location: {
      position, top, left, right, bottom,
    },
  }) => css`
    position: ${position};
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};

    background-color: ${rgba};

    backdrop-filter: blur(${blur}px);
    z-index: ${zIndex};
  `}
`;
