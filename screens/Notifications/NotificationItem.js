import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon style={{backgroundColor : 'blue'}} {...props} icon="account-plus-outline" />

const NotificationItem = ({ item }) => {
    return (
        <Card style={item.isRead ? styles.normal: styles.notRead}>
            <Card.Title title={item.message} subtitle='Görüntülemek için tıklayın' left={LeftContent} />
        </Card>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    normal : {
        backgroundColor: 'white'
    },
    notRead: {
        backgroundColor: '#E8D6FD'
    }
})