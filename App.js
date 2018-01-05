/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/app/AppContainer';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhacer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhacer)
}

const store = configureStore({})

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App;
