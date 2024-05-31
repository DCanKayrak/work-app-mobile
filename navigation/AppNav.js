import MainContainer from './MainContainer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Onboarding from '../screens/Onboarding/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '../screens';
import StackNavigator from './StackNavigator';

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
    }

    return (
        <NavigationContainer>
            <StackNavigator></StackNavigator>
        </NavigationContainer>
    )
}

export default AppNav