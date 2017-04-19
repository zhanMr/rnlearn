'use strict'
import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
class Login extends Component {
    static navigationOptions = {
        title: '登陆'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{paddingTop: 20}}>
                <View style={{height: 30}}>
                    <TextInput placeholder="用户名"/>
                </View>
                <View style={{height: 30}}>
                    <TextInput placeholder="密码"/>
                </View>
                <Button title="登录" onPress=""/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        padding:5,
        borderBottomWidth:0.5,
        borderBottomColor:'#d6d7da'
    }
});

export default Login;