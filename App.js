/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './src/components/Counter';
import store from './src/components/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
