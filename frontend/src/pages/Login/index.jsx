import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Overlay from '../../components/Overlay';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../api';

import useInputErrors from '../../hooks/useInputErrors';
import isEmailValid from '../../utils/isEmailValid';
import delay from '../../utils/delay';

import { Container, Wrapper } from './styles';

const childVariants = {
  init: {
    scale: 1.1,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
};

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    errors, setError, removeError, getMessageError,
  } = useInputErrors();

  const isFormValid = errors.length === 0 && email && password;

  function handleEmailChange(event) {
    const { value } = event.target;

    if (!value) {
      setError({
        field: 'email',
        message: 'E-mail é obrigatório',
      });
    } else if (!isEmailValid(value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido',
      });
    } else {
      removeError('email');
    }

    setEmail(value);
  }

  function handlePasswordChange(event) {
    const { value } = event.target;

    if (!value) {
      setError({
        field: 'password',
        message: 'Senha é obrigatória',
      });
    } else {
      removeError('password');
    }

    setPassword(value);
  }

  function handleLostPassword() {
    if (!email) {
      setError({
        field: 'email',
        message: 'Informe o e-mail que deseja recuperar a senha',
      });
    } else if (!isEmailValid(email)) {
      setError({
        field: 'email',
        message: 'Informe um e-mail válido',
      });
    } else {
      removeError('email');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await delay(1000);
      const { data } = await api.post('/auth', {
        email, password,
      });
      // amarzenar token e usuario num context Auth
      console.log(data);
    } catch (err) {
      const { data } = err.response;

      if (!data) {
        console.log('Servidor não respondendo');
        return;
      }

      console.log(data.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Overlay zIndex={0} />
      <Background size="45vw" />
      <Wrapper>
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
          <Logo isBig />
        </motion.div>
        <Container
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
            initial="init"
            animate="enter"
            className="wrapped-content"
          >
            <motion.h1
              variants={childVariants}
            >
              Bem vindo(a) de volta!
            </motion.h1>
            <motion.p
              variants={childVariants}
            >
              Espero que tenha ótima inspirações para hoje :)
            </motion.p>
            <motion.form
              variants={childVariants}
              className="form-login"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-inputs">
                <Input
                  as={motion.div}
                  variants={childVariants}
                  className="form-input"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                  error={getMessageError('email')}
                  disabled={isLoading}
                />
                <Input
                  as={motion.div}
                  variants={childVariants}
                  className="form-input"
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={handlePasswordChange}
                  error={getMessageError('password')}
                  disabled={isLoading}
                />
              </div>
              <div className="form-actions">
                <motion.button
                  variants={childVariants}
                  className="form-lost-password"
                  onClick={handleLostPassword}
                  disabled={isLoading}
                >
                  Esqueci a senha :(
                </motion.button>
                <div className="form-main-actions">
                  <Link
                    as={motion.a}
                    variants={childVariants}
                    to="/register"
                    className="form-no-account disabled"
                    disabled={isLoading}
                  >
                    <span className="app__text-shadow">Não tenho uma conta</span>
                  </Link>
                  <Button
                    as={motion.button}
                    variants={childVariants}
                    type="submit"
                    disabled={!isFormValid}
                    loading={isLoading}
                  >
                    Vamos lá!
                  </Button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </Container>
      </Wrapper>
    </>
  );
}
