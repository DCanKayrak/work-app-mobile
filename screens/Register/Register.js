import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import { PostWithoutAuth } from '../../services/HttpService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

const Login = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [data, setData] = useState({});

    const navigation = useNavigation();

    const sendRequest = () => {
        PostWithoutAuth("/api/Auth/Register", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            userType: 0,
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

    const ClearTextBoxes = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    const HandleRegister = () => {
        sendRequest();
        ClearTextBoxes();
    }

    useFocusEffect(
        useCallback(() => {
            ClearTextBoxes();
        }, [])
    );

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Kayıt Ol!</Text>
                <CustomTextInput text={'First Name'} val={firstname} setVal={setFirstName} />
                <CustomTextInput text={'Email'} val={lastname} setVal={setLastName} />
                <CustomTextInput text={'Email'} val={email} setVal={setEmail} />
                <CustomTextInput text={'Password'} val={password} setVal={setPassword} />
                <Button title='Register' onPress={HandleRegister} />
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
