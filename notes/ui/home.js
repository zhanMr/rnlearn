import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../store/reducers';
import * as action from '../store/action';
const loggerMIddleware = createLogger();
const store = createStore(reducers, applyMiddleware(
    thunkMiddleware
));
import List from './list';
export default class Home extends Component {
    static navigationOptions = {
        title: 'UI组件'
    }
    render() {
        store.dispatch(action.calculation(2000))
        store.dispatch(action.getFacebook()).then(()=>console.log(store.getState()))
        return (
            <Provider store={store}>
                <List {...this.props}/>
            </Provider>
        );
    }
}




