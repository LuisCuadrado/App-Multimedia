import React from 'react';
import {View,StyleSheet,Image,Pressable} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageHeader = ({navigation,stack,type}) =>{
   
    return(
        <View style={styles.containerMenu}>
            <Pressable onPress={()=>stack?navigation.navigate(stack):navigation.openDrawer()}>
                <Image 
                    source={
                        type=='Menu'?require('../../assets/Recursos/menu-icon.png'):
                        type=='Image'?require('../../assets/Recursos/image-gallery.png'):
                        type=='Video'?require('../../assets/Recursos/video-gallery.png'):
                        type=='Music'?require('../../assets/Recursos/music-gallery.png'):
                        require('../../assets/Recursos/others-gallery.png')
                    } 
                    style={styles.imagenMenu}
                />  
            </Pressable>
        </View>
    );

}

export default ImageHeader;

const styles = StyleSheet.create({
    imagenMenu:{
        height: hp('7%'),
        width: wp('12%'),
        resizeMode:'cover'
    },
    containerMenu:{
        marginLeft: wp('3%'),
    }
});