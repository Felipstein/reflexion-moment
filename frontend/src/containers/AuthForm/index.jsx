import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';
import Background from '../../components/Background';

import * as S from './styles';
import Overlay from '../../components/Overlay';

export default function AuthForm({
  title, subTitle, inputs, actions, subActions, onSubmit,
}) {
  return (
    <>
      <Overlay zIndex={0} />
      <Background size="45vw" />
      <S.Wrapper>
        <motion.div
          initial={{ y: -20, opacity: 0, scale: 1.1 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <Logo scale={1.7} />
        </motion.div>
        <S.Container
          as={motion.div}
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="app__box-shadow"
        >
          <motion.div
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.4,
              },
            }}
            className="wrapped-content"
          >
            <h1>
              {title}
            </h1>
            <p>
              {subTitle}
            </p>
            <form
              className="form-login"
              onSubmit={onSubmit}
              noValidate
            >
              <div className="form-inputs">
                {inputs}
              </div>
              <div className="form-actions">
                {subActions}
                <div className="form-main-actions">
                  {actions}
                </div>
              </div>
            </form>
          </motion.div>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  inputs: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
  subActions: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  subActions: undefined,
};
