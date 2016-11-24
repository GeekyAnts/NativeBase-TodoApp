/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Index from './app/index';

class NativeBaseTodoApp extends Component { // eslint-disable-line
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('NativeBaseTodoApp', () => NativeBaseTodoApp);
