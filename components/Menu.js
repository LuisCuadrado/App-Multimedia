import { StackActions } from '@react-navigation/native';
import React, {Component} from 'react';
import {View,StyleSheet,StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default class Menu extends Component{
    constructor(props){
        super(props);
    }

    onChangeScreen = (name)=>{
        /*const pushAction = StackActions.push({
            routeName: name
        });
        this.props.navigation.dispatch(pushAction);*/
        this.props.navigation.navigate(name);
    }
    render(){
        return(
            <View style={style.container}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
                
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        height: hp('100%'),
        width: wp('80%'),
        backgroundColor: '#D8BFD8'
    }
});