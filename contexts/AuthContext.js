import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostWithoutAuth } from '../services/HttpService';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);
        PostWithoutAuth("/api/Auth/Login", {
            email: email,
            password: password
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    AsyncStorage.setItem("userToken", result.data.token);
                    console.log(result.message);
                    setUserToken(result.data.token);
                } else {
                    console.log(result.message);
                    //setError(result.message);
                }
            })
            .catch((err) => console.log(err.message));
        AsyncStorage.setItem('userToken', userToken)
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const CheckLoggedIn = async() => {
        try {
            let userToken = await AsyncStorage.getItem('tokenKey');  
            setUserToken(userToken);
            setIsLoading(false);
        }
        catch(e) {
            console.log('isLogged in error', e);
        }
    }

    useEffect(() => {
        CheckLoggedIn();
    },[])

    useEffect(() => {
        setIsLoggedIn(userToken !== null);
    }, [userToken]);

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}