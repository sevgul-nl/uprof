import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducer from './reducers';
//import thunkMiddleware from 'redux-thunk';
//import { createPromise } from 'redux-promise-middleware';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';

const muiTheme = createTheme({
  textField: {
    focusColor: '#9fa5a8',
  },
});
/*
const middleware = [
  thunkMiddleware,
  //createLogger(),
  createPromise({
    promiseTypeSuffixes: ['REQ', 'ACK', 'ERR'],
  }),
];

const store = createStore(reducer, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
