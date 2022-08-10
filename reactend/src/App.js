import React, { Component } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { StoreAccess } from './store/store-access';
import { Provider } from 'react-redux';
import dataStore from './store';
import Signin from './components/Signin';
import { Identity } from './components/Identity';
import './App.css';
import GradientBackground from './components/GradientBackground';
import Message from './components/Message';
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <Message
        type="error"
        message={error.message}
        label={'Try againg'}
        handleClick={resetErrorBoundary}
      />
    </div>
  );
}
export default class App extends Component {
  render() {
    return (
      <>
        <StoreAccess store={dataStore} />
        <GradientBackground />
        <Provider store={dataStore}>
          <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Identity />
            </ErrorBoundary>
            <Signin />
          </div>
        </Provider>
      </>
    );
  }
}
