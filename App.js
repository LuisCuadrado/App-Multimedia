import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
  async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === 'granted') {
      return (true);
    } else {
      throw new Error('Location permission not granted');
    }
  }
  return (
    <>
      <StatusBar/>
      <AppNavigation/>
    </>
  );
}


