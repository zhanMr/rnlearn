import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './store/action';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View,
    Dimensions,
    Animated,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView

} from 'react-native';
const screen = Dimensions.get('window');

class Animale{
    eat(){
        console.log('吃饭');
    }

}
class Dog extends Animale{
    wang(){
        console.log('汪汪');
    }
}
class Cat extends Dog{
    // constructor(){
    //     // super()
    // }
    food(){
        //console.log(this;);
        this.wang();
        this.eat();
    }
}
let cat = new Cat();
cat.food();


class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        };
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([1,2,3,4,5,6,7,8,9,0,1,2,3])
        }

    }
    update(){
        let {dispatch} = this.props;
        console.log(this.props);
        dispatch(action.calculation(2));
    }
    componentDidMount(){
        // Animated.timing(
        //     this.state.fadeAnim,
        //     {
        //         toValue: 1,
        //         duration: 3500
        //
        //     }
        // ).start();
    }
    render() {
        let data = this.props;
        console.log(data);
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, paddingTop: 2, backgroundColor: 'red'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow = {data => <View style={{height: 100}}><Text>{data}</Text></View>}
                    />
                </View>
                <View style={{flex: 1, paddingTop: 2, backgroundColor: 'blue'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow = {data => <View style={{height: 100}}><Text>{data}</Text></View>}
                    />
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    lines:{
     backgroundColor:'red'
    },
    line: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center'
        //alignItems: 'center'
    },
    line2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'white'
    }
});

function select(state){
    return {
        data: state.calculation
    }
}
export default connect(select)(Calculator);