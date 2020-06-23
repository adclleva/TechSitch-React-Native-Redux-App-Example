/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from './app/store/reducer';
import ApplicationComponents from './app/components/ApplicationComponents';

const store = createStore(reducer);

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
