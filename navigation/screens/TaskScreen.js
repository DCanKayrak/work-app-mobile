import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../../components/Header'

const TaskScreen = () => {
  return (
    <View>
    <Header></Header>
      <Text style={{color : 'black'}}>TaskScreen</Text>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({})