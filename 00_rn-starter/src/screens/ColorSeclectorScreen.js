import React, { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ColorCouter from "../components/ColorCouter";
import ColorViewer from "../components/ColorViewer";

const ColorSeclectorScreen = () => {
  const [color, setColor] = useState({ r: 150, g: 150, b: 150 });
  const { titleStyle, colorViewStyle } = styles;

  const generateColorHandler = (color_selected = null, increase = true) => {
    let r = color.r;
    let g = color.g;
    let b = color.b;
    const COLOR_INCREMENT = 15;
    switch (color_selected) {
      case "RED":
        if (increase && r < 255 - COLOR_INCREMENT) r += COLOR_INCREMENT;
        else if (increase) r = 255;
        else if (r > COLOR_INCREMENT) r -= COLOR_INCREMENT;
        else r = 0;
        break;

      case "GREEN":
        if (increase && g < 255 - COLOR_INCREMENT) g += COLOR_INCREMENT;
        else if (increase) g = 255;
        else if (g > COLOR_INCREMENT) g -= COLOR_INCREMENT;
        else g = 0;
        break;

      case "BLUE":
        if (increase && b < 255 - COLOR_INCREMENT) b += COLOR_INCREMENT;
        else if (increase) b = 255;
        else if (b > COLOR_INCREMENT) b -= COLOR_INCREMENT;
        else b = 0;
        break;
      default:
        if (increase && b < 255 - COLOR_INCREMENT) b += COLOR_INCREMENT;
        else if (increase) b = 255;
        else if (b > COLOR_INCREMENT) b -= COLOR_INCREMENT;
        else b = 0;
        break;
    }
    setColor({ r: r, g: g, b: b });
  };

  return (
    <View>
      <ColorCouter
        title="Red"
        funcPlus={() => generateColorHandler("RED")}
        funcLess={() => generateColorHandler("RED", false)}
      />
      <ColorCouter
        title="Green"
        funcPlus={() => generateColorHandler("GREEN")}
        funcLess={() => generateColorHandler("GREEN", false)}
      />
      <ColorCouter
        title="Blue"
        funcPlus={() => generateColorHandler("BLUE")}
        funcLess={() => generateColorHandler("BLUE", false)}
      />
      <ColorViewer r={color.r} g={color.g} b={color.b} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorViewStyle: {
    height: 200,
    width: 200,
  },
  titleStyle: {
    fontSize: 30,
  },
});

export default ColorSeclectorScreen;
