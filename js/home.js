import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../store/reducers';
import {Button} from 'react-native';
import List from './list';

const store = createStore(reducers, applyMiddleware(
    thunkMiddleware
));

export default class Home extends Component {
    static navigationOptions = {
        title: '首页'
    }
    render() {
        return (
            <Provider store={store}>
                <List {...this.props}/>
            </Provider>
        );
    }
}




