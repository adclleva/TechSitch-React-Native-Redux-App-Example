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
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {
  ageUp,
  ageDown,
  ageUpAsyncSaga,
  ageDownAsyncSaga,
} from '../store/actions/actions';

class ApplicationComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <View style={styles.screen}>
        <Text>TechSith Redux React Native App</Text>

        <Text>Age: {this.props.reducer.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Age Up" onPress={this.props.onAgeUp} />
          <Button title="Age Down" onPress={this.props.onAgeDown} />
        </View>
        <Text>History</Text>
        {this.props.reducer.history.map((item, index) => {
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
        <View style={styles.container2}>
          <View>
            <Text>A: {this.props.reducerA.a}</Text>
            <Button
              title="Update A"
              onPress={() => this.props.updateA(this.props.reducerB.b)}
            />
          </View>
          <View>
            <Text>B: {this.props.reducerB.b}</Text>
            <Button
              title="Update B"
              onPress={() => this.props.updateB(this.props.reducerA.a)}
            />
          </View>
        </View>
        {this.props.reducer.loading && (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/dog.jpeg')}
            />
          </View>
        )}
        <Text>Age: {this.props.reducerSaga.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Age Up" onPress={this.props.onAgeUpSaga} />
          <Button title="Age Down" onPress={this.props.onAgeDownSaga} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container2: {
    flexDirection: 'row',
    padding: 10,
  },
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
    onAgeUp: () => dispatch(ageUp(5)),
    onAgeDown: () => dispatch(ageDown(5)),
    onAgeUpSaga: () => dispatch(ageUpAsyncSaga(5)),
    onAgeDownSaga: () => dispatch(ageDownAsyncSaga(5)),
    onDeleteItem: (id) => dispatch({type: 'DELETE_ITEM', key: id}),
    updateA: (b) => dispatch({type: 'UPDATE_A', value: b}),
    updateB: (a) => dispatch({type: 'UPDATE_B', value: a}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponents);
