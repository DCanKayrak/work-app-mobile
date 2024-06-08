import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { AppNav } from './AppNav';

const MainApp = () => {
    return (
        <PaperProvider>
            <AppNav></AppNav>
        </PaperProvider>
    )
}

export default MainApp

const styles = StyleSheet.create({})