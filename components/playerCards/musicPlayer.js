import React, {useState} from 'react';
import { StyleSheet,Image,Pressable,Modal,Button, View,Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageViewer from 'react-native-image-zoom-viewer';

import { Audio, Video,AVPlaybackStatus } from 'expo-av';

const ImagePlayer = ({data})=>{

  const [sound, setSound] = React.useState();
  const [status, setStatus] = React.useState(false);

  async function playSound() {
    const { sound} = await Audio.Sound.createAsync({
       uri: data.uri}
    );
    setSound(sound);
    setStatus(true);
    await sound.playAsync(); 
  }

  async function pauseSound() {
    await sound.stopAsync();
    setStatus(false); 
  }
  React.useEffect(() => {
    return sound?()=>sound.unloadAsync():undefined;
  }, [sound]);

    return(
      <View style={{alignItems:'center'}}>
            <View style={styles.topMusic}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={require('../../assets/Recursos/music.png')}
                />
            </View>
            <Pressable onPress={()=>!status?playSound():pauseSound()}>
              <View style={styles.bottomMusic}>
                  <View style={{width:wp('35%'),alignItems:'center'}}>
                      <Text numberOfLines={1} style={styles.text}>{!status?'Play':'Stop'}</Text>
                  </View>
              </View>
            </Pressable>
        </View>
      
    );

}
export default ImagePlayer;

const styles = StyleSheet.create({
  topMusic:{
    width: wp('50%'),
    backgroundColor:'white',
    borderWidth: hp('0.2%'),
    borderColor:'#BA55D3',
    borderTopLeftRadius:hp('2%'),
    borderTopRightRadius:hp('2%'),
    alignItems:'center'
  },
  bottomMusic:{
    width: wp('50%'),
    height: hp('8%'),
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
  text:{
    fontWeight:'bold',
    fontSize:hp('3%'),
    fontFamily:'serif',
    color:'#4B0082'
  },
  image:{
    width: wp('50%'),
    height: hp('30%'),
    borderRadius: hp('2%')
  }
});
