import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import NotificationItem from './NotificationItem';
import { GetNotifications } from '../../services/Notification';
import { GetWithAuth } from '../../services/HttpService';

import { AuthContext } from '../../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = () => {
    const [notifications, setNotifications] = useState({});

    const {userToken} = useContext(AuthContext)

    const handleGetNotifications = () => {
        fetch("http://10.0.2.2:5290/api/Notification", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + userToken,
            },
        }).then((res) => res.json())
        .then((res) => setNotifications(res.data));
    };

    useEffect(() => {
        handleGetNotifications();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={notifications}
                renderItem={({ item }) => <NotificationItem item={item} />}
                keyExtractor={(item, index) => item.id.toString() || index.toString()}
            />
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({});
