import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TaskScreen from './screens/TaskScreen';
import TableScreen from './screens/TableScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const homeScreen = 'Home';
const calenderScreen = 'Calender';
const settingsScreen = 'Settings';
const profileScreen = 'Profile';

const MainContainer = () => {
  return (
    <Tab.Navigator
    initialRouteName={homeScreen}
    screenOptions={({route}) => ({
        tabBarIcon : ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeScreen) {
                iconName = focused ? 'home' : 'home-outline'
            }
            else if (rn === calenderScreen) {
                iconName = focused ? 'calendar' : 'calendar-outline'
            }
            else if (rn === settingsScreen) {
                iconName = focused ? 'list' : 'list-outline'
            }
            else if (rn === profileScreen) {
                iconName = focused ? 'person-circle' : 'person-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        },
        headerShown : false,
    })}
    >
      <Tab.Screen name={homeScreen} component={TaskScreen} />
      <Tab.Screen name={calenderScreen} component={TableScreen} />
      <Tab.Screen name={settingsScreen} component={SettingsScreen} />
      <Tab.Screen name={profileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainContainer

const styles = StyleSheet.create({})