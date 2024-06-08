import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon style={{backgroundColor : 'blue'}} {...props} icon="account-plus-outline" />

const NotificationItem = ({ item }) => {
    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
    )
}

export default NotificationItem

const styles = StyleSheet.create({})