import React from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ColorCouter = ({ title = null, funcPlus = null, funcLess = null }) => {
  const { titleStyle } = styles;

  return (
    title && (
      <View>
        <Text style={titleStyle}>{title}</Text>
        <Button title={"+"} onPress={() => funcPlus()} />
        <Button title={"-"} onPress={() => funcLess()} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
  },
});

export default ColorCouter;
