import { Button, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput'
import { PostWithoutAuth } from '../../services/HttpService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    navigation.navigate("Login");
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
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Kayıt Ol</Text>
                <Text style={styles.titleDescription}>Hey, Welcome!</Text>

                <View style={styles.inputContainer}>
                    <CustomTextInput text={'First Name'} val={firstname} setVal={setFirstName} placeholder={'First Name'} />
                    <CustomTextInput text={'Last Name'} val={lastname} setVal={setLastName} placeholder={'Last Name'} />
                    <CustomTextInput text={'Email'} val={email} setVal={setEmail} placeholder={'Email'} />
                    <CustomTextInput text={'Password'} val={password} setVal={setPassword} placeholder={'Password'} isSecured={true} />
                </View>

                <TouchableHighlight style={styles.buttonSignIn} onPress={HandleRegister}>
                    <Text style={styles.buttonSignInText}>Register</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerButtonText}>If you have an account</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.continueWith}>Or continue with</Text>
                    <View style={styles.socialMediaContainer}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons style={styles.socialMediaIcon} name={'google'} color={'black'} size={28}></MaterialCommunityIcons>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <MaterialCommunityIcons style={styles.socialMediaIcon} name={'facebook'} color={'black'} size={28}></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
                {success && <Text style={styles.success}>{success}</Text>}
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginHorizontal: 50,
        marginVertical: 25
    },
    title: {
        fontSize: 30,
        color: '#1F41BB',
        textAlign: "center",
        fontWeight: "700",
    },
    titleDescription: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        flexWrap: 'wrap',
        letterSpacing: 1,
        fontWeight: '500'
    },
    inputContainer: {
        paddingVertical: 30
    },
    forgotPassword: {
        fontSize: 16,
        color: '#1F41BB',
        textAlign: "right",
        fontWeight: "700",
    },
    buttonSignIn: {
        backgroundColor: '#1F41BB',
        padding: 16,
        borderRadius: 10,
    },
    buttonSignInText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },

    registerButtonText: {
        color: '#494949',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center'
    },

    continueWith: {
        color: '#1F41BB',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center'
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 36,
        marginTop: 15
    },
    socialMediaIcon: {
        backgroundColor: '#ECECEC',
        color: '#494949',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10
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
