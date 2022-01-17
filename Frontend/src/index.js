import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppRoot } from './StyledComponents';


ReactDOM.render(
  <BrowserRouter>
    <AppRoot />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
