import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Settings, Tabs } from '../screens';

const Drawer = createDrawerNavigator();

const MainContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

export default MainContainer

const styles = StyleSheet.create({})