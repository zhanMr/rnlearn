/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {AppRegistry,} from 'react-native';
import ui from './ui/ui';

const App = StackNavigator({
    Home: {screen: ui.home},
    Calculator: {screen: ui.calculator},
    Toast: {screen: ui.toast}
});

export default class rnlearn extends Component {
    render() {
        return (
           <App/>
        );
    }
}
AppRegistry.registerComponent('rnlearn', () => rnlearn);
