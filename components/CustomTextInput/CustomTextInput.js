import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = () => {
    return (
        <View>
            <Text style={styles.title}>Short Break:</Text>
            <TextInput
                style={styles.input}
                value={1}
                onChangeText={value => setShortBreak(value)}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 8,
        color: 'black'
    },
    title: {
        color: 'black'
    }
})