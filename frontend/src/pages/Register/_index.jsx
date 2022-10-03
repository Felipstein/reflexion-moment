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

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    errors, setError, removeError, getMessageError,
  } = useInputErrors();
  const { register } = useContext(AuthContext);

  const isFormValid = errors.length === 0 && name && email && password && confirmPassword;

  function handleNameChange(event) {
    const { value } = event.target;

    if (!value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name');
    }

    setName(value);
  }

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
    } else if (value.length < 3) {
      setError({
        field: 'password',
        message: 'Senha não pode ser menor que três caracteres',
      });
    } else if (confirmPassword && value !== confirmPassword) {
      setError({
        field: 'confirmPassword',
        message: 'As senhas não coincidem',
      });
    } else {
      removeError('password');
    }

    setPassword(value);
  }

  function handleConfirmPasswordChange(event) {
    const { value } = event.target;

    if (!value) {
      setError({
        field: 'confirmPassword',
        message: 'Confirmar senha é obrigatória',
      });
    } else if (value !== password) {
      setError({
        field: 'confirmPassword',
        message: 'As senhas não coincidem',
      });
    } else {
      removeError('confirmPassword');
    }

    setConfirmPassword(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await delay(1000);
      await register({
        name, email, password, confirmPassword,
      });
    } catch (err) {
      toast({ type: 'warn', content: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthForm
      title="Seja bem-vindo(a)!"
      subTitle="Que tal começarmos uma sessão de inspirações?"
      inputs={(
        <>
          <Input
            className="form-input"
            type="name"
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
            error={getMessageError('name')}
            disabled={isLoading}
          />
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
          <Input
            className="form-input"
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={getMessageError('confirmPassword')}
            disabled={isLoading}
          />
        </>
      )}
      actions={(
        <>
          <Link
            to="/login"
            className={`form-about-account${isLoading ? ' disabled' : ''}`}
            disabled={isLoading}
          >
            <span className="app__text-shadow">Já tenho uma conta</span>
          </Link>
          <Button
            type="submit"
            disabled={!isFormValid}
            loading={isLoading}
          >
            Cadastrar
          </Button>
        </>
      )}
      onSubmit={handleSubmit}
    />
  );
}
