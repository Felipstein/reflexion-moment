/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

import { HeaderLayout } from './containers/HeaderLayout';
import Login from './pages/Login';
import Register from './pages/Register';

function PrivateRoute({ children }) {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? children : <Navigate to="/login" />;
}

function AuthRoute({ children }) {
  const { authenticated } = useContext(AuthContext);

  return !authenticated ? children : <Navigate to="/" />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <HeaderLayout.Home />
          </PrivateRoute>
        )}
      />

      <Route
        path="/networking"
        element={(
          <PrivateRoute>
            <HeaderLayout.Networking />
          </PrivateRoute>
        )}
      />

      <Route
        path="/login"
        element={(
          <AuthRoute>
            <Login />
          </AuthRoute>
        )}
      />
      <Route
        path="/register"
        element={(
          <AuthRoute>
            <Register />
          </AuthRoute>
        )}
      />

      <Route
        path="*"
        element={
          <Navigate to="/" replace />
      }
      />
    </Routes>
  );
}
