import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Profile, Settings, Tabs, Login, Register } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DrawerContent from './DrawerContent';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props}/>}
    >
      <Drawer.Screen name="Home" component={Tabs} />
      {isLoggedIn ? (
        <>
          <Drawer.Screen name="Profile" component={Profile} />
          <DrawerItem label="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
        </>
      )}
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const MainContainer = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('tokenKey');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('tokenKey');
    setIsLoggedIn(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <DrawerNav></DrawerNav>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
