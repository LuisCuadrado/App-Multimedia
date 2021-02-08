import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

/*Screens*/
import ImageScreen from '../screens/ImageScreen';
import VideoScreen from '../screens/VideoScreen';
import MusicScreen from '../screens/MusicScreen';
import OthersScreen from '../screens/OthersScreen';
/*Componentes*/
import Header from '../components/Header';
import Menu from '../components/Menu';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const HomeStack = () =>{
    return(
        <Stack.Navigator initatialRouteName="Home">
            <Stack.Screen
                name='Home'
                component={ImageScreen}
                options={{
                    header: ({navigation})=>{
                        return <Header navigation={navigation}/>
                    }
                }}
            />
        </Stack.Navigator>
    );
}

const StackVideo = createStackNavigator();
const VideoStack = () =>{
    return(
        <StackVideo.Navigator initatialRouteName="Video">
            <StackVideo.Screen
                name='Video'
                component={VideoScreen}
                options={{
                    header: ({navigation})=>{
                        return <Header navigation={navigation}/>
                    }
                }}
            />
        </StackVideo.Navigator>
    );
}

const StackMusic = createStackNavigator();
const MusicaStack = () =>{
    return(
        <StackMusic.Navigator initatialRouteName="Music">
            <StackMusic.Screen
                name='Music'
                component={MusicScreen}
                options={{
                    header: ({navigation})=>{
                        return <Header navigation={navigation}/>
                    }
                }}
            />
        </StackMusic.Navigator>
    );
}

const StackOthers = createStackNavigator();
const OtrosStack = () =>{
    return(
        <StackOthers.Navigator initatialRouteName="Others">
            <StackOthers.Screen
                name='Others'
                component={OthersScreen}
                options={{
                    header: ({navigation})=>{
                        return <Header navigation={navigation}/>
                    }
                }}
            />
        </StackOthers.Navigator>
    );
}

const Drawer = createDrawerNavigator();
const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="HomeStack" 
                drawerType='slide' 
                drawerContent={({navigation})=><Menu navigation={navigation}/>}
                drawerStyle={{width: widthPercentageToDP('80%')}}
            >
                <Drawer.Screen
                    name="HomeStack"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="VideoStack"
                    component={VideoStack}
                />
                <Drawer.Screen
                    name="MusicaStack"
                    component={MusicaStack}
                />
                <Drawer.Screen
                    name="OtrosStack"
                    component={OtrosStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;