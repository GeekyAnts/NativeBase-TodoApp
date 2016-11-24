/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
} from 'react-native';
import Index from './app/index';

class NativeBaseTodoApp extends Component { // eslint-disable-line
  render() { // eslint-disable-line class-methods-use-this
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={'#304FFE'}
          barStyle="light-content"
        />
        <Index />
      </View>
    );
  }
}

AppRegistry.registerComponent('NativeBaseTodoApp', () => NativeBaseTodoApp);
