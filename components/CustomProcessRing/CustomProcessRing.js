import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(6, 121, 214, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false // optional
};

const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
};

const CustomProcessRing = () => {
    return (
        <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center'}}>
            <ProgressChart
                data={data}
                width={screenWidth - 50}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{flex : 1, justifyContent : 'center', alignItems: 'center'}}
            />
        </View>
    )
}

export default CustomProcessRing

const styles = StyleSheet.create({})