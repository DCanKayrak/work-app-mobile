import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTextInput = ({text, val, setVal, placeholder, isSecured}) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={val}
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                secureTextEntry={isSecured}
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
        color: 'black',
        borderRadius: 5,
    },
    title: {
        color: 'black'
    }
})