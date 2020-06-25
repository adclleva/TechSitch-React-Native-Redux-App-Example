/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {Provider} from 'react-redux';
import ApplicationComponents from './app/components/ApplicationComponents';

import createSagaMiddleware from 'redux-saga';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './app/store/reducers/reducer';
import reducerA from './app/store/reducers/reducerA';
import reducerB from './app/store/reducers/reducerB';
import reducerSaga from './app/store/reducers/reducerSaga';
import {watchAgeUp} from './app/store/sagas/saga';

const rootReducer = combineReducers({
  reducer,
  reducerA,
  reducerB,
  reducerSaga,
});

// this is for the middleware that would catch the action
// return (next) => {
//   return (action) => {
//     const result = next(action);
//     console.log(`Caught in the middleware ${result}`);
//   };
// };
// this is equivalent to the curried function below
const logAction = (store) => (next) => (action) => {
  const result = next(action);
  console.log(`Caught in the middleware ${JSON.stringify(result)}`);
  return result;
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, logAction, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(watchAgeUp); // this will enable the saga

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <ApplicationComponents />
      </Provider>
    );
  }
}

export default App;
