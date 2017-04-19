import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Modal,
    Text,
    TouchableHighlight,
    Easing,
    Animated
} from 'react-native';

class Toast extends Component{
    static navigationOptions = {
        title: 'Toast'
    }
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            click: false,
            fadeAnim: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0),
            width: new Animated.Value(100),
            height: new Animated.Value(100),
            widthx: 100
        };
    }
    changeModal(visible){
        if(this.state.click) return;
        this.setState({modalVisible:  visible, click: true});
        setTimeout(()=> this.setState({modalVisible: false, click: false}), 3000);
    }
    showText(){
        this.state.width.setValue(100);
        console.log(this.state.width);
        Animated.timing(this.state.width, {
            toValue: 300,
            duration: 50,
            easing: Easing.linear
        }).start();

        // Animated.sequence([
        //     Animated.timing(this.state.width, {
        //     toValue: 300,
        //     duration: 50,
        //     easing: Easing.linear
        // }),
        //     Animated.timing(this.state.height, {
        //         toValue: 300,
        //         duration: 50,
        //         easing: Easing.linear
        //     })
        // ]).start(()=> this.showText());
        // Animated.timing(this.state.width, {
        //     toValue: 300,
        //     duration: 2500,
        //     easing: Easing.linear
        // }).start();
        // Animated.timing(this.state.height, {
        //     toValue: 300,
        //     duration: 2500,
        //     easing: Easing.linear
        // }).start();
    }
    componentDidMount(){
        // Animated.parallel(['fadeAnim', 'rotation', 'fontSize'].map(item => {
        //     return Animated.timing(this.state[item], {
        //         toValue: 1,
        //         duration: 1000,
        //         easing: Easing.linear
        //     });
        // })).start();

    /*   Animated.timing(
           this.state.fadeAnim,
               {
                   toValue: 1,
                   duration: 2500,
                   easing: Easing.linear
               }
       ).start()*/
        this.showText();
    }
    test(){
        //this.state.widthx.setValue(200);
        this.setState({widthx: 200});
        console.log(this.state);
    }
    render() {
        //console.log(this.state.modalVisible);
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: this.state.widthx, height: 20, backgroundColor:'black'}}>
                    <Text style={{color: 'white'}}>xxx</Text>
                </View>
                <Button title="提交" onPress={this.test.bind(this)}/>
                <Animated.View
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        padding: 20,
                        alignItems: 'center',
                        backgroundColor: 'yellow',
                        justifyContent: 'center',
                        borderRadius: 50
                    }}
                >
                    <Text style={{color: 'white', fontSize: 30}}>Hello React Native</Text>
                </Animated.View>


                {/*<Animated.View style={{*/}
                    {/*flex: 1,*/}
                    {/*alignItems: 'center',*/}
                    {/*justifyContent: 'center',*/}
                    {/*opacity: this.state.fadeAnim,*/}
                    {/*transform: [{*/}
                        {/*rotateZ: this.state.rotation.interpolate({*/}
                            {/*inputRange: [0, 1],*/}
                            {/*outputRange: ['0deg', '360deg']*/}
                        {/*})*/}
                    {/*}]*/}
                {/*}}>*/}
                    {/*<Animated.Text style={{*/}
                        {/*fontSize: this.state.fontSize.interpolate({*/}
                            {/*inputRange: [0, 1],*/}
                            {/*outputRange: [12, 26]*/}
                        {/*})*/}
                    {/*}}>*/}
                        {/*Hello React Native*/}
                    {/*</Animated.Text>*/}
                {/*</Animated.View>*/}
      {/*          <Animated.Text sty{{opacity: this.state.fadeAnim}}le=>1</Animated.Text>
                <Text>2</Text>
                <Text>3</Text>
                <Button title="hello react native" onPress={this.changeModal.bind(this, true)}/>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: 'black', padding: 15, borderRadius: 10}}>
                            <Text style={{color: 'white'}}>Hello React Native</Text>
                            <Text style={{color: 'white'}}>Hello React Native</Text>
                            <Text style={{color: 'white'}}>Hello React Native</Text>
                        </View>
                    </View>
                </Modal>*/}
            </View>
        );
    }
}

export default Toast;