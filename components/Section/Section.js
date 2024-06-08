import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Divider } from 'react-native-paper';

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
            <Divider />
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    section: {
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 30,

        elevation: 23,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1,
    },
})