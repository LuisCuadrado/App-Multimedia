import React from 'react';
import { StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Video} from 'expo-av';
const VideoPlayer = ({data})=>{
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return(
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: data.uri,
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );

}
export default VideoPlayer;

const styles = StyleSheet.create({
    video:{
        width: wp('90%'),
        height: hp('50%'),
        borderRadius: hp('2%')
    }
  });
