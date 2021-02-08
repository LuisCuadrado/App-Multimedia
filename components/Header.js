import React,{Component} from 'react';
import {View,StatusBar,StyleSheet,Image,Pressable} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <StatusBar/>
                <View style={styles.container}>
                    <View style={styles.containerMenu}>
                        <Pressable onPress={()=>this.props.navigation.openDrawer()}>
                            <Image 
                                source={require('../assets/Recursos/menu-icon.png')} 
                                style={styles.imagenMenu}
                            />  
                        </Pressable>
                    </View>
                    <View style={styles.containerBar}>
                        <View style={styles.containerMenu}>
                                <Image 
                                    source={require('../assets/Recursos/image-gallery.png')} 
                                    style={styles.imagenMenu}
                                />
                        </View>
                        <View style={styles.containerMenu}>
                                <Image 
                                    source={require('../assets/Recursos/video-gallery.png')} 
                                    style={styles.imagenMenu}
                                />
                        </View>
                        <View style={styles.containerMenu}>
                                <Image 
                                    source={require('../assets/Recursos/music-gallery.png')} 
                                    style={styles.imagenMenu}
                                />
                        </View>
                        <View style={styles.containerMenu}>
                                <Image 
                                    source={require('../assets/Recursos/others-gallery.png')} 
                                    style={styles.imagenMenu}
                                />
                        </View>
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: hp('7%'),
        width:  wp('100%'),
        backgroundColor: '#DDA0DD',
        flexDirection: 'row',
    },
    imagenMenu:{
        height: hp('7%'),
        width: wp('12%'),
        resizeMode:'cover'
    },
    containerMenu:{
        marginLeft: wp('3%'),
    },
    containerBar:{
        flexDirection:'row',
        justifyContent:'space-around',
        width: wp('85%')
    }
});