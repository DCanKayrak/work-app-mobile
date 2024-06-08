import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions, Image } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator';
import { screenWidth } from 'react-native-gifted-charts/src/utils';
import { Searchbar, FAB, Portal } from 'react-native-paper';
import homeBg from '../../assets/img/home-bg.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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

      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Son Çalışmalarınız</Text>
          <TouchableOpacity>
            <Text style={styles.sectionTitle}>View More</Text>
          </TouchableOpacity>
        </View>


        <ScrollView horizontal={true}>
          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>

          <View style={styles.achievementContainer}>
            <View>
              <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
              <Text style={styles.achievement}>Lig Puanı</Text>
            </View>
          </View>
          
        </ScrollView>
      </View>
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
