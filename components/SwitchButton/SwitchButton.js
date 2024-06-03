import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SwitchButton = ({ data }) => {
    const [activeDate, setActiveDate] = useState(data[0].id);

    const handleActiveDate = (id) => {
        setActiveDate(id);
    }

    return (
        <View style={styles.degreeContainer}>
            <View style={styles.dateSelector}>
                {
                    data.map(i => (
                        <TouchableOpacity key={i.id} onPress={() => handleActiveDate(i.id)}>
                            <Text style={activeDate == i.id ? styles.activeDate : styles.date}>{i.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default SwitchButton

const styles = StyleSheet.create({
    degreeContainer: {
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'gray',
        marginHorizontal: 10
    },
    dateSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    date: {
        color: 'blue',
        fontSize: 15
    },
    activeDate: {
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        color: 'white'
    },
})
