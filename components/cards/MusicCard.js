import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MusicCard = ({data})=>{

    return(
        <>
            <View style={styles.topMusic}>
                <Image
                    style={styles.musica}
                    resizeMode='contain'
                    source={require('../../assets/Recursos/music.png')}
                />
            </View>
            <View style={styles.bottomMusic}>
                <View style={{width:wp('35%'),alignItems:'center'}}>
                    <Text numberOfLines={1} style={styles.text}>{data.filename}</Text>
                </View>
            </View>
        </>
    );

}
export default MusicCard;

const styles = StyleSheet.create({
    topMusic:{
        backgroundColor:'white',
        borderWidth: hp('0.2%'),
        borderColor:'#BA55D3',
        borderTopLeftRadius:hp('2%'),
        borderTopRightRadius:hp('2%'),
        alignItems:'center'
    },
    bottomMusic:{
        width: wp('40%'),
        height: hp('5%'),
        borderRightWidth:hp('0.2%'),
        borderLeftWidth:hp('0.2%'),
        borderBottomWidth:hp('0.2%'),
        borderBottomLeftRadius: hp('2%'),
        borderBottomRightRadius: hp('2%'),
        borderColor:'#BA55D3',
        backgroundColor: '#D8BFD8',
        alignItems:'center',
        justifyContent:'center'
    },
    musica:{
        width: wp('20%'),
        height: hp('20%'),
        borderRadius: hp('2%')
    },
    text:{
        fontWeight:'bold',
        fontSize:hp('2%'),
        fontFamily:'serif',
        color:'#4B0082'
    }
  });
