import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import toast from '../../utils/toast';
import Input from '../../components/Input';
import AuthForm from '../../containers/AuthForm';
import delay from '../../utils/delay';
import isEmailValid from '../../utils/isEmailValid';
import useInputErrors from '../../hooks/useInputErrors';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    errors, setError, removeError, getMessageError,
  } = useInputErrors();
  const { login } = useContext(AuthContext);

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

      return;
    } if (!isEmailValid(email)) {
      setError({
        field: 'email',
        message: 'Informe um e-mail válido',
      });

      return;
    }

    removeError('email');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await delay(1000);
      await login({ email, password });
    } catch (err) {
      toast({ type: 'warn', content: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthForm
      title="Bem-vindo(a) de volta!"
      subTitle="Espero que tenha ótimas inspirações para hoje :)"
      inputs={(
        <>
          <Input
            className="form-input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            error={getMessageError('email')}
            disabled={isLoading}
          />
          <Input
            className="form-input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            error={getMessageError('password')}
            disabled={isLoading}
          />
        </>
      )}
      subActions={(
        <button
          className="form-lost-password"
          type="button"
          onClick={handleLostPassword}
          disabled={isLoading}
        >
          Esqueci a senha :(
        </button>
      )}
      actions={(
        <>
          <Link
            to="/register"
            className={`form-no-account${isLoading ? ' disabled' : ''}`}
            disabled={isLoading}
          >
            <span className="app__text-shadow">Não tenho uma conta</span>
          </Link>
          <Button
            type="submit"
            disabled={!isFormValid}
            loading={isLoading}
          >
            Vamos lá!
          </Button>
        </>
      )}
      onSubmit={handleSubmit}
    />
  );
}
