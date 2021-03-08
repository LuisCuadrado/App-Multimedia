import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*Screens*/
import ImageScreen from '../screens/ImageScreen';
import VideoScreen from '../screens/VideoScreen';
import MusicScreen from '../screens/MusicScreen';
import OthersScreen from '../screens/OthersScreen';
import DetallesScreen from '../screens/DetallesScreen';
/*Componentes*/
import ImageHeader from '../components/header/ImageHeader';

const Stack = createStackNavigator();
const ImagenesStack = () =>{
    return(
        <Stack.Navigator initatialRouteName="Imagen">
            <Stack.Screen
                name='Imagen'
                component={ImageScreen}
                options={{header: ()=> null}}
            />
            <Stack.Screen
                name='Detalles'
                component={DetallesScreen}
                options={{header: ()=> null}}
            />
        </Stack.Navigator>
    );
}

const VideoStack = () =>{
    return(
        <Stack.Navigator initatialRouteName="Video">
            <Stack.Screen
                name='Video'
                component={VideoScreen}
                options={{header: ()=> null}}
            />
            <Stack.Screen
                name='Detalles'
                component={DetallesScreen}
                options={{header: ()=> null}}
            />
        </Stack.Navigator>
    );
}

const MusicaStack = () =>{
    return(
        <Stack.Navigator initatialRouteName="Music">
            <Stack.Screen
                name='Music'
                component={MusicScreen}
                options={{header: ()=> null}}
            />
            <Stack.Screen
                name='Detalles'
                component={DetallesScreen}
                options={{header: ()=> null}}
            />
        </Stack.Navigator>
    );
}

const OtrosStack = () =>{
    return(
        <Stack.Navigator initatialRouteName="Others">
            <Stack.Screen
                name='Others'
                component={OthersScreen}
                options={{header: ()=> null}}
            />
            <Stack.Screen
                name='Detalles'
                component={DetallesScreen}
                options={{header: ()=> null}}
            />
        </Stack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = 'Imagenes'
                tabBarOptions={{activeTintColor: 'white',inactiveTintColor:'black', style: {backgroundColor:'#DDA0DD'} }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        if(route.name === 'Imagenes') 
                            iconName = focused? require('../assets/Recursos/image-gallery.png'):
                                                require('../assets/Recursos/image-gallery-ns.png');
                        else if (route.name === 'Video')
                            iconName = focused? require('../assets/Recursos/video-gallery.png'):
                                                require('../assets/Recursos/video-gallery-ns.png');
                        else if (route.name === 'Musica')
                            iconName = focused? require('../assets/Recursos/music-gallery.png'):
                                                require('../assets/Recursos/music-gallery-ns.png');
                        else if (route.name === 'Otros')
                            iconName = focused? require('../assets/Recursos/others-gallery.png'):
                                                require('../assets/Recursos/others-gallery-ns.png');
                      return <ImageHeader type={iconName}/>;
                    },
                  })}
            >
                <Tab.Screen name="Imagenes" component={ImagenesStack}/>
                <Tab.Screen name="Video"    component={VideoStack} />
                <Tab.Screen name="Musica"   component={MusicaStack} />
                <Tab.Screen name="Otros"    component={OtrosStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;