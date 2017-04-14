import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../store/reducers';
import * as action from '../store/action';
const store = createStore(reducers);
import List from './list';
export default class Home extends Component {
    static navigationOptions = {
        title: 'UI组件'
    }
    render() {
        store.dispatch(action.calculation(200));
        return (
            <Provider store={store}>
                <List {...this.props}/>
            </Provider>
        );
    }
}




