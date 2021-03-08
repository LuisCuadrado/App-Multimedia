import React from 'react';
import ListMedia from '../components/ListMedia';

export default function VideoScreen({navigation}) {
  return (
    <ListMedia navigation={navigation} type='musica'/>
  );
}