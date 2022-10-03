import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import toast from '../../utils/toast';
import AuthForm from '../../containers/AuthForm';
import delay from '../../utils/delay';
import isEmailValid from '../../utils/isEmailValid';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';
import useAuthForm from '../../hooks/useAuthForm';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    email, password, isFormValid,
  } = useAuthForm({ nameInput: false, confirmPasswordInput: false });
  const { login } = useContext(AuthContext);

  useEffect(() => {
    email.disabled(isLoading);
    password.disabled(isLoading);
  }, [isLoading]);

  function handleLostPassword() {
    if (!email.value) {
      email.feedback.throwError('Informe o e-mail que deseja recuperar a senha');

      return;
    } if (!isEmailValid(email.value)) {
      email.feedback.throwError('Informe um e-mail válido');

      return;
    }

    email.feedback.removeError();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await delay(1000);
      await login({ email: email.value, password: password.value });
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
          {email.inputComponent}
          {password.inputComponent}
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
            className={`form-about-account${isLoading ? ' disabled' : ''}`}
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
