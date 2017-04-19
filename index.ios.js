/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';
import page from './js/page';

const App = StackNavigator({
    Home: {screen: page.Home},
    Login: {screen: page.Login}
});

export default class rnlearn extends Component {
    render() {
        return (
           <App/>
        );
    }
}
AppRegistry.registerComponent('rnlearn', () => rnlearn);
