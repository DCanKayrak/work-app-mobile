import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Section from '../../components/Section/Section';
import CustomContributionChart from '../../components/CustomContributionChart/CustomContributionChart';
import CustomBarChart from '../../components/CustomBarChart/CustomBarChart';
import CustomProcessRing from '../../components/CustomProcessRing/CustomProcessRing';
import CustomSegmentedButtons from '../../components/CustomSegmentedButtons/CustomSegmentedButtons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StatsScreen = () => {

  const [value, setValue] = React.useState('walk');

  const datesDummy = [
    {
      id: '1',
      name: 'Son Ay'
    },
    {
      id: '2',
      name: 'Son 3 Ay'
    },
    {
      id: '3',
      name: 'Son Yıl'
    },
    {
      id: '4',
      name: 'Tüm zamanlar'
    }
  ]

  return (
    <ScrollView>
      <CustomSegmentedButtons buttons={[
        {
          icon: 'walk',
          value: 'walk',
          label: 'Bu ay',
        },
        {
          icon: 'walk',
          value: 'train',
          label: 'Son 6 Ay',
        },
        {
          icon: 'walk',
          value: 'drive',
          label: 'Tüm zamanlar',
        },
      ]} value={value} setValue={setValue}></CustomSegmentedButtons>

      <Section section={{ id: 4, name: '' }}>
        <View style={styles.achievementContainer}>
          <View>
            <MaterialCommunityIcons name={'star-four-points'} color={'black'} size={30} />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>18000</Text>
            <Text style={styles.achievement}>Lig Puanı</Text>
          </View>
        </View>
      </Section>

      <Section section={{ id: 1, name: 'Contribution Chart' }}>
        <CustomContributionChart></CustomContributionChart>
      </Section>

      <Section section={{ id: 2, name: 'Bar Chart' }}>
        <CustomBarChart></CustomBarChart>
      </Section>

      <Section section={{ id: 3, name: 'Progress Ring' }}>
        <CustomProcessRing></CustomProcessRing>
      </Section>
    </ScrollView>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 32
  },
  hr: {
    backgroundColor: 'gray',
    opacity: 25,
    height: 1,
  },

  chart: {
    marginTop: 50,
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
