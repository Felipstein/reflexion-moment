import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/themes/default';
import GlobalStyle from './assets/themes/global';
import ToastsContainer from './containers/ToastsContainer';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ToastsContainer />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
