import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({text, val, setVal}) => {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
            <TextInput
                style={styles.input}
                value={val}
                onChangeText={value => setVal(value)}
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