/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, View, TouchableOpacity} from 'react-native';

export default class rnlearn extends Component {
    getCalculator(){
        let button = [];
        const buttonText =
            [
                ['C','《', '%', 'U'],
                ['7', '8', '9', 'X'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['00', '0', '.', '=']
            ];
        buttonText.forEach((item, key) => {
            let viewText = [];
            item.forEach((item, key) => {
                viewText.push(
                    <View style={{flex: 1, alignItems: 'center'}} key={key}>
                        <Text style={{color: 'white'}}>{item}</Text>
                    </View>
                )
            })
            button.push(
                <View key={key} style={{flex: 1, justifyContent:'center', flexDirection: 'row', alignItems: 'center'}}>
                    {viewText}
                </View>
            )
        })
        return button;
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor:'black'}}></View>
                <View style={{flex: 8, backgroundColor:'#3E606F'}}>
                    {this.getCalculator()}
                </View>
            </View>
        );
    }
}



AppRegistry.registerComponent('rnlearn', () => rnlearn);