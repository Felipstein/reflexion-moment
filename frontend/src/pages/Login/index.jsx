import React from 'react';
import { Link } from 'react-router-dom';

import Overlay from '../../components/Overlay';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import { Container, Wrapper } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Overlay zIndex={0} />
      <Background size="45vw" />
      <Wrapper>
        <Logo isBig />
        <Container className="app__box-shadow">
          <h1>Bem vindo(a) de volta!</h1>
          <p>
            Espero que tenha ótima inspirações para hoje :)
          </p>
          <form className="form-login" onSubmit={handleSubmit} noValidate>
            <div className="form-inputs">
              <Input
                className="form-input"
                type="email"
                placeholder="E-mail"
                error="Email obrigatório"
              />
              <Input
                className="form-input"
                type="password"
                placeholder="Senha"
                error="Senha obrigatória"
              />
            </div>
            <div className="form-actions">
              <a href="/" className="form-lost-password">
                <small>Esqueci a senha :(</small>
              </a>
              <div className="form-main-actions">
                <Link to="/register" className="form-no-account">
                  <span className="app__text-shadow">Não tenho uma conta</span>
                </Link>
                <Button
                  type="submit"
                >
                  Vamos lá!
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </Wrapper>
    </>
  );
}
