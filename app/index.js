import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './AppContainer';
import reducer from './reducer';

const store = createStore(reducer);

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
