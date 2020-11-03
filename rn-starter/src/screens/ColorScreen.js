import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const [colorID, setColorsID] = useState(0);
  const { listStyle } = styles;

  const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const addColor = () => {
    setColorsID(colorID + 1);
    setColors([
      ...colors,
      {
        key: colorID,
        color: generateColor(),
      },
    ]);
  };

  return (
    <View>
      <Button title={"Add color"} onPress={() => addColor()} />
      <FlatList
        style={listStyle}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item.color,
              }}
            />
          );
        }}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {},
});

export default ColorScreen;
