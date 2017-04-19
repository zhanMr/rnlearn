'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {observer} from 'mobx-react';
import Toast from './toast';
import store from './store';
import * as Actions from '../store/action';
//const store = new Store();



import {observable} from 'mobx';

const todos = observable([
    {
        title: 'A', completed: true

    },{
        title: 'B', completed: false
    }
]);

const todos2 = observable(2);
//console.log(todos2.get());
//todos.map(item => console.log(item.title));

// const map = observable(asMap({ key: "value"}));
// map.set("key", "new value");
// console.log(map);

@observer
class Test extends Component{
    render(){
        return <Text>{store.title}</Text>
    }
}


@observer
class List extends Component {
    showToast(){
        alert('xx');
    }
    changeStore(){
        //store.title = 'Hello Mobx';
        store.changeTitle('Hello Hello Mobx');
        store.todoList.push({
            key: 2,
            value: 'Hello Mobx'
        });
        store.increment();
    }
    componentDidMount(){
        let {dispatch} = this.props;
      setTimeout(function () {
          dispatch(Actions.calculation(2000));
      },3000)
    }
    render() {
        const { navigate } = this.props.navigation;
        //console.log('redux', this.props.data);
        //console.log(store.tick);
        //console.log(this.props);
        //console.log('face', this.props.face);
        fetch('http://localhost:3000/',{
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data => data.json()).then(data => console.log(data));

        return (
            <View>
                {store.newTodoList.map((list, key) => {
                    return (
                        <View key={key} style={styles.button}><Text>{list.value}</Text></View>
                    )
                })}
                <View style={styles.button}>
                    <Button title={`计算器${this.props.data}`} onPress={() => navigate('Calculator')}/>
                </View>
                <View style={styles.button}>
                    <Button title="toast" onPress={() => navigate('Toast')}/>
                </View>
                <View style={styles.button}>
                    <Button title="日历" onPress={this.showToast.bind(this)}/>
                </View>
                <View style={styles.button}>
                    <Button title={store.title || '按钮'} onPress={this.changeStore.bind(this)}/>
                </View>
                <View style={styles.button}>
                    <Test/>
                </View>
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