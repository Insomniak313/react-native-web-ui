import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart as WebVictoryChart } from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const VictoryChart = () => (
  <View style={styles.container}>
    <WebVictoryChart width={350}>
      <VictoryBar data={data} x="quarter" y="earnings" />
    </WebVictoryChart>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export default VictoryChart;
