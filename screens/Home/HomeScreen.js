import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions, Image } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator';
import { screenWidth } from 'react-native-gifted-charts/src/utils';
import { Searchbar, FAB, Portal } from 'react-native-paper';
import homeBg from '../../assets/img/home-bg.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import banner1 from '../../assets/img/home/1.png';
import banner2 from '../../assets/img/home/2.png';
import banner3 from '../../assets/img/home/3.png';

const HomeScreen = () => {

  const { width: screenWidth } = useWindowDimensions();

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '45%' }}>
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

      <ScrollView style={{
        marginTop: 15,
      }}>
        <View>
          <View style={{ width: '100%', borderRadius: 15 }}>
            <Image
              source={banner1}
              style={{ width: '100%', height: 150, borderRadius: 15 }}
            />
          </View>

          <View style={{ width: '100%', marginTop: 15, borderRadius: 15 }}>
            <Image
              source={banner2}
              style={{ width: '100%', height: 150, borderRadius: 15 }}
            />
          </View>

          <View style={{ width: '100%', marginTop: 15, borderRadius: 15 }}>
            <Image
              source={banner3}
              style={{ width: '100%', height: 150, borderRadius: 15 }}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    fontSize: 20,
    fontWeight: '700'
  },

  achievementContainer: {
    width: 150,
    margin: 5,
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  achievement: {
    color: 'gray'
  },
});
