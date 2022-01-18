import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AppRoot } from './StyledComponents';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoot />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
