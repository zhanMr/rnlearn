/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Calculator from './calculator';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import reducers from './store/reducers';
import * as action from './store/action';
const store = createStore(reducers);

const image = getImage({

});


class HomeScreen extends  Component{
    static navigationOptions = {
        title: 'Welcome',
        header: {
            right: <Button
                title="Info"
                onPress={()=> console.log(this)}
            />,
        }
    }
    info(){
        alert('xxx');
    }
    constructor(){
        super();
        this.state = {movies: [], text: '哈哈'};
    }
    componentDidMount(){
        async function getMovies() {
            try{
                let result = await fetch('https://facebook.github.io/react-native/movies.json');
                let json = await result.json();
                return json.movies.concat(json.movies, json.movies,json.movies);
            }catch(e){
                console.log(e);
            }
        }
        getMovies()
            .then((data) => {
                console.log(data);
                this.setState({movies: data});
            });

        function timeout(ms){
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            })
        }
        async function asyncPrint(value, ms) {
            await timeout(ms);
            console.log(value);
        }
        asyncPrint('hello world', 500);

        async function  f() {
            return 'hello world';
        }
        f().then(v => console.log(v));

        function testError(type) {
            return new Promise((resolve, reject) => {
                if(type){
                    resolve('正确');
                }else{
                    reject('错误 ');
                }
            })
        }
        testError(true).catch(e => {}).finally(() => console.log('执行完成！'));

    }
    updateText(key){
        let movies = this.state.movies;
        movies[key].Status = !movies[key].Status;
        this.setState({movies})
    }
    getText(text){
        console.log(text);
        if(isNaN(text)) return;
        this.setState({text: parseInt(text)});
    }
    render(){
        const {navigate} = this.props.navigation;
        const {movies} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{height: 42}}>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.getText.bind(this)}
                        value={this.state.text}
                    />
                </View>
                {movies.length ?
                    <ScrollView>
                        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                               style={{width: 400, height: 400}} />
                        {movies.map((item, key) => {
                            return (
                                <View
                                    style={[styles.lines,{
                                        padding: 10,
                                        borderBottomWidth:0.5,
                                        borderBottomColor:'#d6d7da'
                                    }, key%2 == 0 ? styles.line1 : styles.line2]}
                                    key={key}>
                                    <View>
                                        <TouchableOpacity onPress={this.updateText.bind(this, key)}>
                                            <Text style={{color: 'white'}}>{item.title}</Text>
                                        </TouchableOpacity>
                                        {item.Status && <Text style={{color: 'white'}}>{item.releaseYear}</Text>}
                                    </View>
                                </View>
                            )
                        })}
                     </ScrollView>:
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'red'}}>加载中...</Text>
                    </View>
                }
            </View>
        )
    }
}

class ChatScreen extends Component{
    static navigationOptions = {
        title: 'Chat'
    }
    render(){
        return <Text>Hello, Chat</Text>
    }
}

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    lines:{
        backgroundColor:'black'
    },
    line: {

        //alignItems: 'center'
    },
    line2:{
        backgroundColor:'blue'
    },
    text:{
        color: 'white'
    }
});
export default class rnlearn extends Component {
    render() {
        store.dispatch(action.calculation(200));
        console.log(store.getState());
        return (
            <Provider store={store}><App/></Provider>
        );
    }
}
AppRegistry.registerComponent('rnlearn', () => App);

