import { Button, StyleSheet, Text, ToastAndroid, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { PostWithoutAuth } from '../../services/HttpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [data, setData] = useState({});

    const navigation = useNavigation();
    const { login, userToken, isLoggedIn } = useContext(AuthContext);

    const handleLogin = async() => {
        await login(email, password);
        setEmail("");
        setPassword("");
        
        if (userToken != null) {
            navigation.navigate('AppMain');
        }
    }

    useEffect(() => {
    }, [email, password, error]);

    useEffect(() => {
        if (userToken != null) {
            navigation.navigate('AppMain');
        }
    }, [userToken]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent : 'center' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Giriş Yap</Text>
                <Text style={styles.titleDescription}>Welcome back you’ve been missed!</Text>

                <View style={styles.inputContainer}>
                    <CustomTextInput text={'Email'} val={email} setVal={setEmail} placeholder={'Email'}/>
                    <CustomTextInput text={'Password'} val={password} setVal={setPassword} placeholder={'Password'} isSecured={true}/>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableHighlight style={styles.buttonSignIn} onPress={handleLogin}>
                    <Text style={styles.buttonSignInText}>Sign in</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButtonText}>Create new account</Text>
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
