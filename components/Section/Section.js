import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Section = ({ section, children, handleShow }) => {
    return (
        <View key={section.id} style={styles.section}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{section.name}</Text>
                {
                    handleShow ?
                        <>
                            <TouchableOpacity onPress={() => handleShow()}>
                                <Text style={styles.sectionTitle}>Tümünü Göster</Text>
                            </TouchableOpacity>
                        </>
                        : <></>
                }
            </View>

            {children}
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    section: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 25
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600'
    },
})