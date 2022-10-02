import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropType from 'prop-types';

import api from '../api';
import APIError from '../errors/APIError';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const authManager = useMemo(() => ({
    authenticated: !!user, user, register, login, logout,
  }), [user]);

  useEffect(() => {
    async function validateToken() {
      const token = getToken();

      const result = await api.post('/auth/validate', { token });

      console.log({ result });

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      console.log({
        useEffect: {
          token, authrozation: api.defaults.headers.common.Authorization,
        },
      });
    }

    validateToken();
  }, []);

  function register({
    // eslint-disable-next-line no-unused-vars
    name, email, password, confirmPassword,
  }) {

  }

  async function login({ email, password }) {
    try {
      const { data: { user: userData, token } } = await api.post('/auth', { email, password });

      setToken(token);
      setUser(userData);

      console.log({
        authenticated: !!user,
        user,
        token,
        auhtorization: api.defaults.headers.common.Authorization,
      });

      return userData;
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
