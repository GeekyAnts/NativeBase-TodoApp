import React, { Component } from 'react';
import { View, Text } from 'react-native';

import moment from 'moment';


export default class MomentTime extends Component {// eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
        // console.log(moment);
    const test = moment(new Date());
        // console.log(test.add(2, 'days'));
    console.log(test);// eslint-disable-line
        // console.log(test.get('date'));
    console.log(test.month());// eslint-disable-line
        // console.log(moment.add(7, 'days'));
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Testing</Text>
        {/* <View style={styles.container}>
                <View style={styles.left}>
                  <Text>Hello</Text>
                </View>
                <Text style={styles.title}>TITLE</Text>
              </View> */}
      </View>
      );
  }
}
