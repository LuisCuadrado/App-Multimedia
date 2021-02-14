import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ListMedia from '../components/ListMedia';

export default function VideoScreen({navigation}) {
  return (
    <ListMedia navigation={navigation} type='video'/>
  );
}