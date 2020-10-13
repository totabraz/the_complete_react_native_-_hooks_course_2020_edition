import React, { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ColorCouter = ({ r = 150, g = 150, b = 150 }) => {
  const { colorViewStyle } = styles;

  return (
    <View
      style={{
        ...colorViewStyle,
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      }}
    />
  );
};

const styles = StyleSheet.create({
  colorViewStyle: {
    height: 200,
    width: "100%",
  },
});

export default ColorCouter;
