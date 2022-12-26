import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles.scss';
import App from './App';
import store from './redux/store';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElem,
);
