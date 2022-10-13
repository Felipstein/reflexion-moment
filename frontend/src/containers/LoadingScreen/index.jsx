import React, { useContext, useEffect } from 'react';
import { BounceLoader, PuffLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { LoadScreenContext } from '../../contexts/LoadScreenContext';
import Logo from '../../components/Logo';
import Background from '../../components/Background';

import * as S from './styles';

const item = {
  prehidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'just',
      duration: 0.6,
    },
  },
  posthidden: {
    y: -50,
    opacity: 0,
    transition: {
      type: 'just',
      duration: 0.6,
    },
  },
};

export default function LoadingScreen({ isLoading }) {
  const loadingScreen = useContext(LoadScreenContext);

  useEffect(() => {
    document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <AnimatePresence>
      {(isLoading || loadingScreen.isLoading) && (
        <S.Wrapper>
          <S.Overlay
            exit={{
              y: '-100vh',
              transition: {
                type: 'just',
                ease: 'easeOut',
                duration: 0.6,
                delay: 0.8,
              },
            }}
          />
          <motion.div
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            <Background
              size="35vw"
              zIndex={10}
            />
          </motion.div>
          <S.Container
            initial="prehidden"
            animate="show"
            exit="posthidden"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
              posthidden: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.header id="overlay-logo" variants={item}>
              <Logo scale={1.6} blackWhite />
            </motion.header>
            <motion.div id="overlay-main-logos" variants={item}>
              <div className="overlay-main-logo">
                <BounceLoader
                  color="#fff"
                  size={54}
                  speedMultiplier={0.5}
                />
              </div>
              <div className="overlay-main-logo">
                <PuffLoader color="#fff" size={128} />
              </div>
            </motion.div>
            <div className="overlay-texts">
              <motion.h1 id="overlay-main-text" variants={item}>
                Espere um pouco
              </motion.h1>
              {loadingScreen.whatIsLoading && (
                <motion.h3 id="overlay-sub-text" variants={item}>
                  {loadingScreen.whatIsLoading}
                </motion.h3>
              )}
            </div>
            <motion.footer className="overlay-footer" variants={item}>
              <span id="overlay-myself">
                2022 - Felipe Oliveira
              </span>
            </motion.footer>
          </S.Container>
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
}

LoadingScreen.propTypes = {
  isLoading: PropTypes.bool,
};

LoadingScreen.defaultProps = {
  isLoading: false,
};
