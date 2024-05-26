import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import { PostWithoutAuth } from '../../services/HttpService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [data, setData] = useState({});

    const navigation = useNavigation();

    const sendRequest = () => {
        PostWithoutAuth("/api/Auth/Login", {
            email: email,
            password: password
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setError(null);
                    AsyncStorage.setItem("tokenKey", result.data.token);
                    setSuccess(result.message);
                    setData(result);
                    navigation.navigate("Home");
                } else {
                    setSuccess(null);
                    console.log(result.message);
                    setError(result.message);
                }
            })
            .catch((err) => console.log(err.message));
    }

    const handleLogin = () => {
        sendRequest();
        setEmail("");
        setPassword("");
    }

    useEffect(() => {
    }, [email, password, error]);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Giriş Yap</Text>
                <CustomTextInput text={'Email'} val={email} setVal={setEmail} />
                <CustomTextInput text={'Password'} val={password} setVal={setPassword} />
                <Button title='Login' onPress={handleLogin} />
                {error && <Text style={styles.error}>{error}</Text>}
                {success && <Text style={styles.success}>{success}</Text>}
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        "justifyContent" : "center",
        "marginHorizontal" : 50,
        "marginVertical" : 25
    },
    title : {
        "fontSize" : 30,
        "color" : 'black',
        "textAlign" : "center"
    },
    black: {
        color: 'black'
    },
    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    }
})
