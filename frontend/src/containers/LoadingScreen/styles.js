import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #111;

  z-index: 9;
`;

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  #overlay-logo {
    margin-top: 5.4rem;
  }

  #overlay-main-logos {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    .overlay-main-logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .overlay-texts {
    position: absolute;
    bottom: 18vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    #overlay-main-text {
      font-size: 8.8rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    #overlay-sub-text {
      font-size: 2.4rem;
      font-weight: 400;
      color: #ffffff90
    }
  }

  .overlay-footer {
    position: absolute;
    bottom: 6.4rem;

    #overlay-myself {
      font-size: 1.8rem;
      color: #ffffff4f
    }
  }

  z-index: 10;

  @media screen and (max-height: 560px) {
    #overlay-main-text {
      font-size: 5.8rem !important;
    }
  }

  @media screen and (max-height: 470px) {
    #overlay-main-text {
      visibility: hidden;
    }
  }

  @media screen and (max-width: 440px) {
    #overlay-main-text {
      font-size: 4.4rem !important;
    }
  }

  @media screen and (max-width: 330px) {
    #overlay-main-text {
      font-size: 3.4rem !important;
    }
  }
`;
