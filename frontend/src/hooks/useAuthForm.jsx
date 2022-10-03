import React, { useMemo, useState } from 'react';

import Input from '../components/Input';
import isEmailValid from '../utils/isEmailValid';

import useInputErrors from './useInputErrors';

export default function useAuthForm(
  {
    nameInput = true,
    emailInput = true,
    passwordInput = true,
    confirmPasswordInput = true,
  } = {
    nameInput: true,
    emailInput: true,
    passwordInput: true,
    confirmPasswordInput: true,
  },
) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    errors, setError, removeError, getMessageError,
  } = useInputErrors();

  const [nameInputDisabled, setNameInputDisabled] = useState(false);
  const [emailInputDisabled, setEmailInputDisabled] = useState(false);
  const [passwordInputDisabled, setPasswordInputDisabled] = useState(false);
  const [confirmPasswordInputDisabled, setConfirmPasswordInputDisabled] = useState(false);

  const isFormValid = useMemo(() => {
    if (nameInput && !name) {
      return false;
    }

    if (emailInput && !email) {
      return false;
    }

    if (passwordInput && !password) {
      return false;
    }

    if (confirmPasswordInput && !confirmPassword) {
      return false;
    }

    return errors.length === 0;
  }, [errors, name, email, password, confirmPassword]);

  const InputComponents = useMemo(() => ({
    name: nameInput && (
      <Input
        className="form-input"
        type="text"
        placeholder="Nome"
        value={name}
        onChange={handleNameChange}
        error={getMessageError('name')}
        disabled={nameInputDisabled}
      />
    ),
    email: emailInput && (
    <Input
      className="form-input"
      type="email"
      placeholder="E-mail"
      value={email}
      onChange={handleEmailChange}
      error={getMessageError('email')}
      disabled={emailInputDisabled}
    />
    ),
    password: passwordInput && (
    <Input
      className="form-input"
      type="password"
      placeholder="Senha"
      value={password}
      onChange={handlePasswordChange}
      error={getMessageError('password')}
      disabled={passwordInputDisabled}
    />
    ),
    confirmPassword: confirmPasswordInput && (
    <Input
      className="form-input"
      type="password"
      placeholder="Confirmar senha"
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
      error={getMessageError('confirmPassword')}
      disabled={confirmPasswordInputDisabled}
    />
    ),
  }), [
    errors,
    name, email, password, confirmPassword,
    nameInputDisabled, emailInputDisabled, passwordInputDisabled, confirmPasswordInputDisabled,
  ]);

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

  function feedbackFactory(field) {
    return {
      throwError(message) {
        setError({ field, message });
      },
      removeError() {
        removeError(field);
      },
    };
  }

  return {
    name: {
      value: name,
      inputComponent: InputComponents.name,
      feedback: feedbackFactory('name'),
      disabled(isDisabled) {
        setNameInputDisabled(isDisabled);
      },
    },
    email: {
      value: email,
      inputComponent: InputComponents.email,
      feedback: feedbackFactory('email'),
      disabled(isDisabled) {
        setEmailInputDisabled(isDisabled);
      },
    },
    password: {
      value: password,
      inputComponent: InputComponents.password,
      feedback: feedbackFactory('password'),
      disabled(isDisabled) {
        setPasswordInputDisabled(isDisabled);
      },
    },
    confirmPassword: {
      value: confirmPassword,
      inputComponent: InputComponents.confirmPassword,
      feedback: feedbackFactory('confirmPassword'),
      disabled(isDisabled) {
        setConfirmPasswordInputDisabled(isDisabled);
      },
    },
    isFormValid,
  };
}
