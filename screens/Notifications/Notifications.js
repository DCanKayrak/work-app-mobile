import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NotificationItem from './NotificationItem';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
            data={notifications}
            renderItem={({notifications}) => <NotificationItem item={notifications}></NotificationItem>}
            />
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({})