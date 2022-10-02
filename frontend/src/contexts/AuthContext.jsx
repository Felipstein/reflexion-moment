import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropType from 'prop-types';

import api from '../api';
import delay from '../utils/delay';
import APIError from '../errors/APIError';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isValidatingToken, setIsValidatingToken] = useState(false);

  const authManager = useMemo(() => ({
    authenticated: !!user, user, register, login, logout, isValidatingToken,
  }), [user, isValidatingToken]);

  useEffect(() => {
    async function validateToken() {
      const token = getToken();

      if (token) {
        setIsValidatingToken(true);
        await delay(2000);
        const { data: { user: userData } } = await api.post('/auth/validate', { token });

        setUser(userData);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setIsValidatingToken(false);
      }
    }

    validateToken();
  }, []);

  async function register({
    name, email, password, confirmPassword,
  }) {
    try {
      const { data: { user: userData, token } } = await api.post('auth/register', {
        name, email, password, confirmPassword,
      });

      setToken(token);
      setUser(userData);
    } catch (err) {
      throw new APIError(err);
    }
  }

  async function login({ email, password }) {
    try {
      const { data: { user: userData, token } } = await api.post('/auth', { email, password });

      setToken(token);
      setUser(userData);
    } catch (err) {
      throw new APIError(err);
    }
  }

  function logout() {
    setUser(null);
    removeToken();
  }

  function getToken() {
    return localStorage.getItem('auth::token');
  }

  function setToken(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('auth::token', token);
  }

  function removeToken() {
    api.defaults.headers.common.Authorization = null;
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
