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

import {createStore, combineReducers} from 'redux';

import reducer from './app/store/reducer';
import reducerA from './app/store/reducerA';
import reducerB from './app/store/reducerB';

const rootReducer = combineReducers({
  reducer,
  reducerA,
  reducerB,
});

const store = createStore(rootReducer);

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
