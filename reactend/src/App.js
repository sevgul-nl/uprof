import React, { Component } from 'react';

import { StoreAccess } from './store/store-access';
import { Provider } from 'react-redux';
import dataStore from './store';
import Signin from './components/Signin';
import { Identity } from './components/Identity';
import './App.css';
import GradientBackground from './components/GradientBackground';

export default class App extends Component {
  render() {
    return (
      <>
        <StoreAccess store={dataStore} />
        <GradientBackground />
        <Provider store={dataStore}>
          <div>
            <Identity />
            <Signin />
          </div>
        </Provider>
      </>
    );
  }
}
