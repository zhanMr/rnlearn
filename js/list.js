'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {connect} from 'react-redux';
class List extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button title="登陆" onPress={() => navigate('Login')}/>
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

function select(state) {
    return {
        data: state.calculation,
        face: state.getFaceBook
    }
}
export default connect(select)(List)