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
  TouchableOpacity,
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
    console.log('this.props', this.props);
    return (
      <View style={styles.screen}>
        <Text>TechSith Redux React Native App</Text>
        <Text>Age: {this.props.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Age Up" onPress={this.props.onAgeUp} />
          <Button title="Age Down" onPress={this.props.onAgeDown} />
        </View>
        <Text>History</Text>
        {this.props.history.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id * index}
              style={styles.historyItem}
              onPress={() => this.props.onDeleteItem(item.id)}>
              <View>
                <Text>{item.value}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  historyItem: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    paddingVertical: 10,
    backgroundColor: '#f7e8bc70',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
    onDeleteItem: (id) => dispatch({type: 'DELETE_ITEM', key: id}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponents);
