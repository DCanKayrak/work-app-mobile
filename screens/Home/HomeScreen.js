import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator';
import { screenWidth } from 'react-native-gifted-charts/src/utils';

const HomeScreen = () => {
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const { width: screenWidth } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Tekrardan Hoşgeldin</Text>
      <CircularProgress value={58} />

      <ScrollView horizontal>
        <ContributionGraph
          values={commitsData}
          endDate={new Date("2017-04-01")}
          numDays={365}
          width={365 * 3}
          height={220}
          chartConfig={chartConfig}
          onDayPress={(day) => {console.log(day)}}
        />
      </ScrollView>

    </View>
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
  }
});
