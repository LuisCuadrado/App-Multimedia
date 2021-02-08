import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

/*Screens*/
import ImageScreen from '../screens/ImageScreen';
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
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;