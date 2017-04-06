import React, { Component } from 'react';
import {Text, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

export  const SideMenu = () => {
  return (
    <View style={{paddingTop:100}}>
    <Text onPress= {Actions.about()}>About</Text>
    <Text onPress= {Actions.jet()}>Jet</Text>
    </View>
  )
}