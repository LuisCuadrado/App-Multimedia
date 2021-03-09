import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,Pressable,Modal,Button} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InfoDetalles from '../components/detalles/infoDetalles';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePlayer from '../components/playerCards/imagePlayer';
import VideoPlayer from '../components/playerCards/videoPlayer';
import MusicPlayer from '../components/playerCards/musicPlayer';
import OthersPlayer from '../components/playerCards/othersPlayer';

export default function App({navigation,route}) {
    const {data,type} = route.params;
    const timeCreation = new Date(data.creationTime).toDateString('es-MX');
    const timeModify = new Date(data.modificationTime).toDateString('es-MX');
    console.log(data);
    
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems:'center'}}>
        <Text style={styles.tituloText}>Detalles</Text>
          {
            type=='imagen'? <ImagePlayer data={data}/>:
            type=='video'?  <VideoPlayer data={data}/>:
            type=='musica'? <MusicPlayer data={data}/>:
                            <OthersPlayer data={data}/>
          }
        <View style={{width:wp('90%'),alignItems:'center'}}>
            <InfoDetalles nombre='Nombre:' descripcion={data.filename}/>
            <InfoDetalles nombre='Clase:' descripcion={data.mediaType}/>
            <InfoDetalles nombre='Ubicación:' descripcion={data.uri} descripcionOpcional={type=='imagen'?`${data.width} x ${data.height}`:null}/>
            {
              (type=='video' || type=='musica')?
              <InfoDetalles nombre='Duración:' descripcion={Math.round(data.duration)+' segundos'}/>:
              null
            }
            <InfoDetalles nombre='Creación:' descripcion={timeCreation} descripcionOpcional={`Ultima Modificación: ${timeModify}`}/>
            <Text>{data.location}</Text>
        </View>
        </View>
        </ScrollView>
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