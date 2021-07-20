/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {
  incNumber,
  decNumber,
  multiplyNumber,
  divideNumber,
} from '../components/actions/index';

const Counter = () => {
  const my_state = useSelector(state => state.changeTheNum);
  const mult_divide_state = useSelector(state => state.multdivideCounter);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(incNumber(5))}>
        <Icon
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}
          name="plus"
          size={20}
          color="#900"
        />
      </TouchableOpacity>
      <Text style={styles.counter}>Counter:{my_state}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decNumber(5))}>
        <Icon
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}
          name="minus"
          size={20}
          color="#900"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(multiplyNumber(5))}>
        <Icon
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}
          name="close"
          size={20}
          color="#900"
        />
      </TouchableOpacity>
      <Text style={styles.counter}>Counter:{mult_divide_state}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(divideNumber(5))}>
        <Icon
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}
          name="italic"
          size={20}
          color="#900"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 100,
  },

  counter: {
    fontSize: 25,
  },
});

export default Counter;
