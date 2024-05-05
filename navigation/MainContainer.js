import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Settings, Tabs, Login, Register } from '../screens';

const Drawer = createDrawerNavigator();

const MainContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      {
        isLoggedIn ? <Drawer.Screen name="Profile" component={Profile} /> : <><Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} /></>
      }


      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

export default MainContainer

const styles = StyleSheet.create({})