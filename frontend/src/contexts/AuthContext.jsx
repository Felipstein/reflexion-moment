import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropType from 'prop-types';

import { api } from '../api';
import { LoadScreenContext } from './LoadScreenContext';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const loadScreen = useContext(LoadScreenContext);
  const [user, setUser] = useState(null);
  const [isValidatingToken, setIsValidatingToken] = useState(false);

  const authManager = useMemo(() => ({
    authenticated: !!user, user, register, login, logout, isValidatingToken,
  }), [user, isValidatingToken]);

  useEffect(() => {
    async function validateToken() {
      const token = getToken();

      if (token) {
        try {
          setIsValidatingToken(true);
          const { user: userData } = await api.validateToken(token);

          setUser(userData);
          api.setDefaultHeader('Authorization', `Bearer ${token}`);
        } catch {
          removeToken();
        } finally {
          setIsValidatingToken(false);
        }
      }
    }

    validateToken();
  }, []);

  useEffect(() => {
    loadScreen.setIsLoading(isValidatingToken);
    loadScreen.setWhatIsLoading('Estamos validando sua sessão...');
  }, [isValidatingToken]);

  async function register({
    name, email, password, confirmPassword,
  }) {
    const { token, user: userData } = await api.registerUser({
      name, email, password, confirmPassword,
    });

    setToken(token);
    setUser(userData);
  }

  async function login({ email, password }) {
    const { token, user: userData } = await api.login({ email, password });

    setToken(token);
    setUser(userData);
  }

  function logout() {
    setUser(null);
    removeToken();
  }

  function getToken() {
    return localStorage.getItem('auth::token');
  }

  function setToken(token) {
    api.setDefaultHeader('Authorization', `Bearer ${token}`);
    localStorage.setItem('auth::token', token);
  }

  function removeToken() {
    api.unsetDefaultHeader('Authorization');
    localStorage.removeItem('auth::token');
  }

  return (
    <AuthContext.Provider value={authManager}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropType.node.isRequired,
};
