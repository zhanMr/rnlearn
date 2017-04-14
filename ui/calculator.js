
import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class Calculator extends Component {
    static navigationOptions = {
        title: '计算器'
    };
    constructor(props){
        super(props);
        this.state = {
            result: 0
        };
    }
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
                        <Text style={{color: 'white', fontSize: 20}}>{item}</Text>
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
                <View style={{flex: 2, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: 'white'}}>{this.state.result}</Text>
                </View>
                <View style={{flex: 8, backgroundColor:'#3E606F'}}>
                    {this.getCalculator()}
                </View>
            </View>
        );
    }
}

export default Calculator;
