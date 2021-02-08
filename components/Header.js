import React from 'react';
import {View,StatusBar,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageHeader from './header/ImageHeader';

const Header = ({navigation}) =>{
        
    return(
        <>
            <StatusBar/>
                <View style={styles.container}>
                    <ImageHeader navigation={navigation} type='Menu'/>
                    <View style={styles.containerBar}>
                        <ImageHeader navigation={navigation} stack='HomeStack' type='Image'/>
                        <ImageHeader navigation={navigation} stack='VideoStack' type='Video'/>
                        <ImageHeader navigation={navigation} stack='MusicaStack' type='Music'/>
                        <ImageHeader navigation={navigation} stack='OtrosStack' type='Others'/>
                    </View>
                </View>
            </>
    );
}

export default Header;

const styles = StyleSheet.create({
    container:{
        height: hp('7%'),
        width:  wp('100%'),
        backgroundColor: '#DDA0DD',
        flexDirection: 'row',
    },
    containerBar:{
        flexDirection:'row',
        justifyContent:'space-around',
        width: wp('85%')
    }
});