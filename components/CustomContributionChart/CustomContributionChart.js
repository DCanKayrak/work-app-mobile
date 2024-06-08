import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { ContributionGraph } from 'react-native-chart-kit';

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

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientTo: "#FFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(6, 121, 214, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const CustomContributionChart = () => {
    return (
        <ScrollView style={{ borderRadius : 15}}>
        <ContributionGraph
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={screenWidth - 50}
            height={220}
            chartConfig={chartConfig}
        /></ScrollView>

    )
}

export default CustomContributionChart

const styles = StyleSheet.create({})