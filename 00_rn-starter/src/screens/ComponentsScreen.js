import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const { titleStyle, textStyle } = styles;
  const greeting = "Hi there!";
  return (
    <View>
      <Text style={titleStyle}> This is the ComponentsScreen </Text>
      <Text style={textStyle}>Hi there!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
