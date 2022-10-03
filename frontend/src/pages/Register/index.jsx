import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import toast from '../../utils/toast';
import AuthForm from '../../containers/AuthForm';
import delay from '../../utils/delay';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';
import useAuthForm from '../../hooks/useAuthForm';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    name, email, password, confirmPassword, isFormValid,
  } = useAuthForm();
  const { register } = useContext(AuthContext);

  useEffect(() => {
    name.disabled(isLoading);
    email.disabled(isLoading);
    password.disabled(isLoading);
    confirmPassword.disabled(isLoading);
  }, [isLoading]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsLoading(true);

      await delay(1000);
      await register({
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
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
          {name.inputComponent}
          {email.inputComponent}
          {password.inputComponent}
          {confirmPassword.inputComponent}
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
