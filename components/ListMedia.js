import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,FlatList, ActivityIndicator,Pressable} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Video, AVPlaybackStatus } from 'expo-av';


const ListMedia = ({navigation,type}) => {

  const [dataMedia, setDataMedia] = useState({});
  const [media, setMedia] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {getMedia()},[]);

  const getMedia = async () =>{
    const options ={
      first: 30,
      mediaType: type=='imagen'?
                    [MediaLibrary.MediaType.photo]:
                    [MediaLibrary.MediaType.video]
                ,
      sortBy: [[ MediaLibrary.SortBy.creationTime, false ]]
    }
    let results = await MediaLibrary.getAssetsAsync(options);
    setDataMedia(results);
    setMedia(results.assets);
  }

  const convierteTiempo = (number) =>{
    let minutos = Math.round(number/60);
    let segundos = Math.round(number%60);
    let result = `${minutos}:${segundos}`
    return result;
  }

  const getMoreMedia = async () =>{
    if(dataMedia.hasNextPage){
      const options ={
        first: 30,
        after: dataMedia.endCursor,
        sortBy: [[ MediaLibrary.SortBy.creationTime, false ]]
      }
      let results = await MediaLibrary.getAssetsAsync(options);
      setDataMedia(results);
      setMedia([...media,...results.assets]);
    }
    else
      setFinal(true)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'serif',color:'black'}}>{` Total: ${dataMedia.totalCount}`}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={media}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-around'}}
        onEndReachedThreshold={0.7}
        onEndReached={()=>getMoreMedia()}
        ItemSeparatorComponent = {()=>
          <View style={{height: hp('2%')}}/>
        }
        ListFooterComponent={()=>
          <View style={{alignItems: 'center',justifyContent: 'center',}}>
            {!final?
              <ActivityIndicator size='large' color='#DDA0DD'/>
              :
              null
            }
          </View>
        }
        renderItem={({item}) =>(
          <Pressable onPress={()=>navigation.push('Detalles',{data:item})}>
            {type=='imagen'?
              <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: item.uri }}
              />
              :
              <>
              <Image
                style={styles.video}
                resizeMode='cover'
                source={{ uri: item.uri }}
              />
              <View style={styles.bottomVideo}>
                <Text style={{fontWeight:'bold',fontSize:hp('3%'),fontFamily:'serif',color:'#4B0082'}}>{convierteTiempo(item.duration)}</Text>
              </View>
              </>
            }
          </Pressable>
        )
        
        }
      />
    </View>
  );
}

export default ListMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image:{
    width: wp('40%'),
    height: hp('50%'),
    borderRadius: hp('2%')
  },
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
    backgroundColor: '#E6E6FA',
    alignItems:'center'
  }
});