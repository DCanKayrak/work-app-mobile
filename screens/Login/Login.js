import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'

const Login = () => {
    return (
        <View>
            <Text>Login</Text>
            <View>
                <CustomTextInput></CustomTextInput>
                <TextInput placeholder='Password'></TextInput>
                <Button title='Login'></Button>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})