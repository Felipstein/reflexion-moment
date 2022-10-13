import React, { useContext, useEffect } from 'react';
import { BounceLoader, PuffLoader } from 'react-spinners';
import { motion, AnimatePresence } from 'framer-motion';

import { AuthContext } from '../../contexts/AuthContext';
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

// done just to keep token validation time
export default function LoadingScreen() {
  const { isValidatingToken } = useContext(AuthContext);

  useEffect(() => {
    document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  return (
    <AnimatePresence>
      {isValidatingToken && (
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
              <motion.h3 id="overlay-sub-text" variants={item}>
                Estamos validando sua sessão...
              </motion.h3>
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
