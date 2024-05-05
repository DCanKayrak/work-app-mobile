import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <FontAwesome name={"user-circle-o"} size={128} color={'black'}></FontAwesome>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  imgContainer : {
    'alignItems' : 'center'
  }
})