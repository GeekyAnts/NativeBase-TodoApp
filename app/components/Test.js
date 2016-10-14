import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Test extends Component { //eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return ( // eslint-disable-line class-methods-use-this
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text>Hello</Text>
          </View>
          <Text style={styles.title}>TITLE</Text>
        </View>
      </View>
    );
  }
}
