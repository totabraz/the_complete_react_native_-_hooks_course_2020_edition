import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Chield #1</Text>
      <Text style={textStyle}>Chield #2</Text>
      <Text style={textStyle}>Chield #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-start",
  },
  textStyle: {
    // marginVertical: 20,
    // marginHorizontal: 20,
    borderWidth: 3,
    borderColor: "red",
  },
});
export default BoxScreen;
