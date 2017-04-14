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
//const store = new Store();

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
    render() {
        const { navigate } = this.props.navigation;
        console.log(store.tick);
        return (
            <View>
                {store.newTodoList.map((list, key) => {
                    return (
                        <View key={key} style={styles.button}><Text>{list.value}</Text></View>
                    )
                })}
                <View style={styles.button}>
                    <Button title="计算器" onPress={() => navigate('Calculator')}/>
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
        data: state.calculation
    }
}
export default connect(select)(List)