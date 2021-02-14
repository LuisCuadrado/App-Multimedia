import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

const infoDetalles = ({nombre,descripcion,descripcionOpcional}) =>{
        
    return(
        <View style={styles.container}>
            <View style={{width:wp('25%')}}>
                <Text style={styles.text}>{nombre}</Text>
            </View>
            <View style={{width:wp('65%')}}>
                <Text>{descripcion}</Text>
                {descripcionOpcional?
                    <Text style={styles.descripcionOpcionalText}>{descripcionOpcional}</Text>
                    :
                    null
                }
            </View>
        </View>
    );
}

export default infoDetalles;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:hp('2%')
    },
    text:{
        fontFamily:'serif'
    },
    descripcionOpcionalText:{
        fontFamily:'serif',fontSize:hp('1.5%')
    }
});