import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const VideoCard = ({data})=>{

    const convierteTiempo = (number) =>{
        let minutos = Math.round(number/60);
        let segundos = Math.round(number%60);
        let result = `${minutos}:${segundos}`
        return result;
    }

    return(
        <>
            <Image
                style={styles.video}
                resizeMode='cover'
                source={{ uri: data.uri }}
            />
            <View style={styles.bottomVideo}>
                <Text style={styles.text}>{convierteTiempo(data.duration)}</Text>
            </View>
        </>
    );

}
export default VideoCard;

const styles = StyleSheet.create({
    video:{
        width: wp('40%'),
        height: hp('45%'),
        borderTopLeftRadius: hp('2%'),
        borderTopRightRadius: hp('2%'),
    },
    bottomVideo:{
        width: wp('40%'),
        height: hp('5%'),
        borderRightWidth:hp('0.2%'),
        borderLeftWidth:hp('0.2%'),
        borderBottomWidth:hp('0.2%'),
        borderBottomLeftRadius: hp('2%'),
        borderBottomRightRadius: hp('2%'),
        borderColor:'#BA55D3',
        backgroundColor: '#D8BFD8',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:hp('3%'),
        fontFamily:'serif',
        color:'#4B0082'
    }
  });
