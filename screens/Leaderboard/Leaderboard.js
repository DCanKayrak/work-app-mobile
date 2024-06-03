import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SwitchButton from '../../components/SwitchButton/SwitchButton'

const usersDummy = [
    {
        id: '1',
        name: 'Danyal',
        score: 10000
    },
    {
        id: '2',
        name: 'Danyal',
        score: 10000
    },
    {
        id: '3',
        name: 'Danyal',
        score: 10000
    },
]

const datesDummy = [
    {
        id : '1',
        name : 'Son Ay'
    },
    {
        id : '2',
        name : 'Son 3 Ay'
    },
    {
        id : '3',
        name : 'Son Yıl'
    },
    {
        id : '4',
        name : 'Tüm zamanlar'
    }
]

const Leaderboard = () => {
    const [activeDate, setActiveDate] = useState(0);

    const handleActiveDate = (id) => {
        setActiveDate(id);
    }

    const LeaderboardUser = ({ item, index }) => (
        <View style={styles.userContainer}>
            <Text style={styles.userName}>#{index + 1}</Text>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userScore}>{item.score}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwitchButton
            data={datesDummy}></SwitchButton>

            <View style={styles.listContainer}>
                <FlatList
                    data={usersDummy}
                    renderItem={({ item, index }) => <LeaderboardUser item={item} index={index} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Leaderboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    degreeContainer: {
        height: 300,
        backgroundColor: 'blue',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    dateSelector: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    activeDate: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        color: 'blue'
    },
    listContainer: {
        flex: 1,
        padding: 10,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userName: {
        color: 'black',
        fontSize: 16,
    },
    userScore: {
        color: 'black',
        fontSize: 16,
    }
})
