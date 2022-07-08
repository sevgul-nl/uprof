import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { Router, Route, hashHistory } from 'react-router';
//import { createLogger } from 'redux-logger';
//import thunkMiddleware from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducers';
//import { fetchContainerId } from './actions';
import App from './containers/App';
//import getMuiTheme from '@mui/material/styles/getMuiTheme';
//import MuiThemeProvider from '@mui/material/styles/MuiThemeProvider';
//import CheckoutContainer from './containers/CheckoutContainer';

//const middleware = [
//  thunkMiddleware,
//  promiseMiddleware({
//    promiseTypeSuffixes: ['REQ', 'ACK', 'ERR'],
//  }),
//];

//if (process.env.NODE_ENV !== 'production') {
//middleware.push(createLogger());
//}

//const store = createStore(reducer, applyMiddleware(...middleware));
const store = createStore(reducer);

//const muiTheme = getMuiTheme({
//  textField: {
//    focusColor: '#9fa5a8',
//  },
//});

//store.dispatch(fetchAllDummyItems());
//store.dispatch(fetchContainerId());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
