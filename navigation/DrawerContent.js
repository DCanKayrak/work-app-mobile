import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerList = [
    { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
    { icon: 'settings', label: 'Settings', navigateTo: 'Settings' },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <DrawerItem
            icon={({ color, size }) => <Ionicons name={icon} size={size} color={color} />}
            label={label}
            onPress={() => navigation.navigate(navigateTo)}
        />
    );
};

const DrawerItems = (props) => {
    return DrawerList.map((el, i) => (
        <DrawerLayout
            key={i}
            icon={el.icon}
            label={el.label}
            navigateTo={el.navigateTo}
        />
    ));
};

const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.profileSection}>
                        <View style={styles.imgContainer}>
                            <FontAwesome name={"user-circle-o"} size={64} color={'black'}></FontAwesome>
                            <Text style={styles.text}>Username</Text>
                        </View>
                    </View>
                    <View style={styles.drawerSection}>
                        <DrawerItems />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15,
    },
    profileSection: {
        marginHorizontal: 15,
        marginTop: 15,
        display: 'flex'
    },
    text: {
        color: 'gray',
    }
});
