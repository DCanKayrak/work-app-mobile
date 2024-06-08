import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';

import { Login, Register, Onboarding } from '../screens';
import MainContainer from './MainContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    const {userToken} = useContext(AuthContext);

    const checkIsLoggedIn = () => {
        if ( userToken == null ){
            navigation.navigate('Onboarding');
        }
    }

    useEffect(() => {
        checkIsLoggedIn();
        console.log("Başarılı giriş - Stack Navigator")
    }, [userToken])

    return (
        <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                />

                <Stack.Screen name="AppMain" component={MainContainer} />
            </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})