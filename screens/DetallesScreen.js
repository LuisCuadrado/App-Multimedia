import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InfoDetalles from '../components/detalles/infoDetalles';

export default function App({navigation,route}) {
    const {data} = route.params;
    const timeCreation = new Date(data.creationTime).toDateString('es-MX');
    const timeModify = new Date(data.modificationTime).toDateString('es-MX');
  return (
    <View style={styles.container}>
        <Text style={styles.tituloText}>Detalles</Text>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: data.uri }}
            />
        <View style={{width:wp('90%'),alignItems:'center'}}>
            <InfoDetalles nombre='Nombre:' descripcion={data.filename}/>
            <InfoDetalles nombre='Clase:' descripcion={data.mediaType}/>
            <InfoDetalles nombre='Ubicación:' descripcion={data.uri} descripcionOpcional={`${data.width} x ${data.height}`}/>
            <InfoDetalles nombre='Creación:' descripcion={timeCreation} descripcionOpcional={`Ultima Modificación: ${timeModify}`}/>
            <Text>{data.location}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    tituloText:{
        fontWeight:'bold',
        fontSize:hp('3%'),
        fontFamily:'serif'
    },
    image:{
        width: wp('90%'),
        height: hp('50%'),
        borderRadius: hp('2%')
    }
});