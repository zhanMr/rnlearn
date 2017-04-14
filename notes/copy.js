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
    TouchableOpacity

} from 'react-native';
const screen = Dimensions.get('window');


class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0)
        }
    }
    update(){
        let {dispatch} = this.props;
        console.log(this.props);
        dispatch(action.calculation(2));
    }
    componentDidMount(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(this.state.bounceValue, {
            toValue: 0.8,
            friction: 1
        }).start();
    }
    render() {
        let data = this.props;
        console.log(data);
        return (
            <View style={styles.container}>
                <View style={{flex: 3,justifyContent:'center', alignItems: 'center'}}>
                    <Text>{data.data}TXT</Text>
                </View>
                <View style={{flex: 3}}>
                    <Animated.Image
                        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                        style={{
                            flex: 1,
                            transform: [
                                {
                                    scale: this.state.bounceValue
                                }
                            ]
                        }}
                    />
                </View>
                <View style={{flex: 4, backgroundColor: 'black'}}>
                    <View style={styles.line}>
                        <View style={styles.line2}>
                            <TouchableOpacity onPress={this.update.bind(this)}>
                                <Text style={styles.text}>C</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                        <View style={styles.line2}><Text style={styles.text}>C</Text></View>
                    </View>
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