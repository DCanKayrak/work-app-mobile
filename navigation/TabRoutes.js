import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home,Agenda,Profile,Stats } from '../screens';

const Tab = createBottomTabNavigator();

const homeScreen = 'Homee';
const calenderScreen = 'Calender';
const statsScreen = 'Stats';
const profileScreen = 'Profile';

const Tabs = () => {
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
            else if (rn === statsScreen) {
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
      <Tab.Screen name={homeScreen} component={Home} />
      <Tab.Screen name={calenderScreen} component={Agenda} />
      <Tab.Screen name={statsScreen} component={Stats} />
      <Tab.Screen name={profileScreen} component={Profile} />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})