import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/themes/default';
import GlobalStyle from './assets/themes/global';
import LoadingScreen from './containers/LoadingScreen';
import ToastsContainer from './containers/ToastsContainer';
import AuthProvider from './contexts/AuthContext';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AuthProvider>
          <ToastsContainer />
          <LoadingScreen />
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
