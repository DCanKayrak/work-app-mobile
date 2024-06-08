import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions, Image } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator';
import { screenWidth } from 'react-native-gifted-charts/src/utils';
import { Searchbar, FAB, Portal } from 'react-native-paper';
import homeBg from '../../assets/img/home-bg.png';

const HomeScreen = () => {

  const { width: screenWidth } = useWindowDimensions();

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '45%'}}>
          <Image
            source={homeBg}
            style={{ width: 250, height: 150 }}
          />
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ color: '#424242', fontSize: 22, fontWeight: '700' }}>Welcome to</Text>
          <Text style={{ color: '#424242', fontSize: 22, fontWeight: '700' }}>StudyLikeWise App!</Text>
        </View>
      </View>

      <Searchbar
        style={{ marginTop: 15 }}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Section Title</Text>
          <TouchableOpacity>
            <Text style={styles.sectionTitle}>View More</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ backgroundColor : 'red', width: '50%'}}>
          <Text>123</Text>
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
  section: {
    marginTop: 20
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'black',
    fontSize: 16
  },
  image: {

  },
});
