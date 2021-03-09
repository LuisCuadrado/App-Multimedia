import React, {useState} from 'react';
import { StyleSheet,Image,Pressable,Modal} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImagePlayer = ({data})=>{

    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <Modal visible={showModal} transparent={true} onRequestClose={()=>setShowModal(false)}>
                <ImageViewer
                    style={{width: wp('100%'),height: hp('100%')}}
                    imageUrls={[{url: data.uri}]}
                />
            </Modal>
            <Pressable onPress={()=>setShowModal(true)}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: data.uri }}
            />
            
            </Pressable>
        </>
    );

}
export default ImagePlayer;

const styles = StyleSheet.create({
    image:{
        width: wp('90%'),
        height: hp('50%'),
        borderRadius: hp('2%')
    }
  });
