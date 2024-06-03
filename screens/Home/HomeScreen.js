import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator';
import { screenWidth } from 'react-native-gifted-charts/src/utils';

const HomeScreen = () => {

  const { width: screenWidth } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTitle}>Tekrardan Hoşgeldin</Text>

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Section Title</Text>
          <TouchableOpacity>
            <Text style={styles.sectionTitle}>View More</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  welcomeTitle: {
    color: 'black',
    fontSize: 24
  },
  section : {
    marginTop : 20
  },
  sectionTitleContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  sectionTitle : {
    color: 'black',
    fontSize: 16
  }
});
