import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import Header from '../../components/Header';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
import Section from '../../components/Section/Section';
import { Dimensions } from "react-native";
import { BarChart, ProgressChart } from 'react-native-chart-kit';

const StatsScreen = () => {
  const screenWidth = Dimensions.get("window").width;

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

  const ringData = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.4, 0.6, 0.8]
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

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
  return (
    <ScrollView>
      <SwitchButton data={datesDummy} />

      <Section section={{ id: 1, name: 'Contribution Chart' }}>

      </Section>

      <Section section={{ id: 2, name: 'Bar Chart' }}>
        <BarChart
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </Section>

      <Section section={{ id: 3, name: 'Progress Ring' }}>
        <ProgressChart
          data={ringData}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
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
  }
});
