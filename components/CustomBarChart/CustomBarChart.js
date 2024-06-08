import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react';
import { BarChart } from 'react-native-chart-kit';

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#0679d6`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
};

const CustomBarChart = () => {
    return (
        <ScrollView>
        <BarChart
            data={data}
            width={screenWidth - 50}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}/>
        </ScrollView>

    )
}

export default CustomBarChart

const styles = StyleSheet.create({})