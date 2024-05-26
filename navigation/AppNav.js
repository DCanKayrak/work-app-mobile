import MainContainer from './MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
    }

    return (
        <NavigationContainer>
            <MainContainer />
        </NavigationContainer>
    )
}

export default AppNav