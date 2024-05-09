import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorizontalRuler = () => {
    return (
        <View style={styles.hr}></View>
    )
}

export default HorizontalRuler

const styles = StyleSheet.create({
    hr: {
        width: 100 + '%',
        height: 160 + 'px',
        backgroundColor: 'black'
    }
})