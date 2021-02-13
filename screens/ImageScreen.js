import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image,FlatList, ActivityIndicator} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {

  const [dataImages, setDataImages] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {getImages()},[]);

  const getImages = async () =>{
    const options ={
      first: 30,
      sortBy: [[ MediaLibrary.SortBy.creationTime, false ]]
    }
    let albumsReponse = await MediaLibrary.getAssetsAsync(options);
    setDataImages(albumsReponse);
    setImagenes(albumsReponse.assets);
  }

  const getMoreImages = async () =>{
    if(dataImages.hasNextPage){
      const options ={
        first: 30,
        after: dataImages.endCursor,
        sortBy: [[ MediaLibrary.SortBy.creationTime, false ]]
      }
      let albumsReponse = await MediaLibrary.getAssetsAsync(options);
      setDataImages(albumsReponse);
      setImagenes([...imagenes,...albumsReponse.assets]);
    }
    else
      setFinal(true)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'serif',color:'#DA70D6'}}>{` Imagenes: ${dataImages.totalCount}`}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={imagenes}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-around'}}
        onEndReachedThreshold={0.7}
        onEndReached={()=>getMoreImages()}
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
            <Image
              style={styles.image}
              resizeMode='contain'
              source={{ uri: item.uri }}
            />
        )
        
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA'
  },
  image:{
    width: wp('40%'),
    height: hp('50%'),
    borderRadius: hp('2%')
  }
});