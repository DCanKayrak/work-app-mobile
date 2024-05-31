import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import slides from './slides'
import OnboardingItem from './OnboardingItem'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const navigate = useNavigation();

    return (
        <View style={{ flex :1, backgroundColor: 'white' }}>
            <FlatList
            data={slides}
            renderItem={ ({item}) => <OnboardingItem item={item}></OnboardingItem>}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={ (item) => item.id }
            ></FlatList>
            <Button title="Haydi başlayalım!" onPress={() => navigate.navigate('Login')}></Button>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})