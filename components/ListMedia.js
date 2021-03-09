import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList, ActivityIndicator,Pressable} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
/*Componentes*/
import ImageCard from './cards/ImageCard';
import VideoCard from './cards/VideoCard';
import MusicCard from './cards/MusicCard';
import OthersCard from './cards/OthersCard';


const ListMedia = ({navigation,type}) => {

  const [dataMedia, setDataMedia] = useState({});
  const [media, setMedia] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {getMedia()},[]);

  const getMedia = async () =>{
    const options ={
      first: 30,
      mediaType:  type=='imagen'?
                    [MediaLibrary.MediaType.photo]:
                  type=='video'?
                    [MediaLibrary.MediaType.video]:
                  type=='musica'?
                    [MediaLibrary.MediaType.audio]:
                    [MediaLibrary.MediaType.unknown]
                ,
      sortBy: [[ MediaLibrary.SortBy.creationTime, false ]]
    }
    let results = await MediaLibrary.getAssetsAsync(options);
    setDataMedia(results);
    setMedia(results.assets);
  }

  const getMoreMedia = async () =>{
    if(dataMedia.hasNextPage){
      const options ={
        first: 30,
        after: dataMedia.endCursor,
        mediaType:  type=='imagen'?
                      [MediaLibrary.MediaType.photo]:
                    type=='video'?
                      [MediaLibrary.MediaType.video]:
                    type=='musica'?
                      [MediaLibrary.MediaType.audio]:
                      [MediaLibrary.MediaType.unknown]
                ,
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
        ItemSeparatorComponent = {()=><View style={{height: hp('2%')}}/>}
        ListFooterComponent={()=>
          <View style={{alignItems: 'center',justifyContent: 'center',}}>
            {!final?
              <ActivityIndicator size='large' color='#DDA0DD'/>
              :
              <View style={{height: hp('2%')}}/>
            }
          </View>
        }
        renderItem={({item}) =>(
          <Pressable onPress={()=>navigation.push('Detalles',{ data: item, type: type})}>
            {
              type=='imagen'?<ImageCard data={item}/>:
              type=='video'?<VideoCard data={item}/>:
              type=='musica'?<MusicCard data={item}/>:
              <OthersCard data={item}/>
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
    backgroundColor: '#E6E6FA'
  }
});