import React from 'react';
import { StyleSheet,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImageCard = ({data})=>{

    return(
        <Image
            style={styles.image}
            resizeMode='contain'
            source={{ uri: data.uri }}
        />
    );

}
export default ImageCard;

const styles = StyleSheet.create({
    image:{
        width: wp('40%'),
        height: hp('50%'),
        borderRadius: hp('2%')
    }
  });
