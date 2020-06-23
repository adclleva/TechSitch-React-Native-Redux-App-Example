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

import {connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../store/reducer';

const store = createStore(reducer);

class ApplicationComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>TechSith Redux React Native App</Text>
        <Text>Age: {this.props.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Age Up" onPress={this.props.onAgeUp} />
          <Button title="Age Down" onPress={this.props.onAgeDown} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponents);
