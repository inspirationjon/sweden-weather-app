import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.component';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';

import { theme } from './styles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
