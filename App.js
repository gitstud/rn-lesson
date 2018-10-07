import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Router from './src/Router';
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
*/

export default class App extends React.Component {
  state = {
    isReady: false
  };
  async componentWillMount() {
    //TODO: bad here?
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Foundation.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    const { isReady } = this.state;

    if (!isReady) {
        return null;
        //can put loading here
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
