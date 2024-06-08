import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Settings, Tabs, Login, Register, Notifications, Agenda, Pomodoro, Leaderboard, Collection } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import Onboarding from '../screens/Onboarding/Onboarding';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Pomodoro" component={Pomodoro} />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Calendar" component={Agenda} />

      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Leaderboard" component={Leaderboard}/>
      <Drawer.Screen name="Collections" component={Collection}/>
    </Drawer.Navigator>
  );
}

const MainContainer = () => {

  return (
    <DrawerNav></DrawerNav>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
