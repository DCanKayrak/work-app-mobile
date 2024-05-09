import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View>
            <Text>Register</Text>
            <View>
                <TextInput placeholder='Mail Address'></TextInput>
                <TextInput placeholder='Username'></TextInput>
                <TextInput placeholder='Password'></TextInput>
                <TextInput placeholder='Re-Password'></TextInput>
                <Button title='Register'></Button>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})