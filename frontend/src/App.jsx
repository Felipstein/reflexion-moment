import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/themes/default';
import GlobalStyle from './assets/themes/global';
import LoadingScreen from './containers/LoadingScreen';
import ToastsContainer from './containers/ToastsContainer';
import AuthProvider from './contexts/AuthContext';
import LoadScreenProvider from './contexts/LoadScreenContext';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LoadScreenProvider>
          <AuthProvider>
            <ToastsContainer />
            <LoadingScreen />
            <Routes />
          </AuthProvider>
        </LoadScreenProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
