import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageHeader = ({type}) =>{
   
    return(
        <View style={styles.containerMenu}>
                <Image 
                    source={type} 
                    style={styles.imagenMenu}
                />
        </View>
    );

}

export default ImageHeader;

const styles = StyleSheet.create({
    imagenMenu:{
        height: hp('8%'),
        width: wp('8%'),
        resizeMode:'contain'
    },
    containerMenu:{
        alignItems:'center'
    }
});