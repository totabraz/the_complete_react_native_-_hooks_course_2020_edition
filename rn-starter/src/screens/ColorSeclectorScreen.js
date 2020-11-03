import React, { useReducer } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ColorCouter from "../components/ColorCouter";
import ColorViewer from "../components/ColorViewer";

const initialState = { red: 0, green: 0, blue: 0 };
const reducer = (state, action) => {
  // state =  { red: number, green: number, blue: number };
  // action =  { type: 'red' || 'green' || 'blue', payload 15 || -15};
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const ColorSeclectorScreen = () => {
  const [colors, dispatchColors] = useReducer(reducer, initialState);
  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCouter
        title="Red"
        funcPlus={() =>
          dispatchColors({ type: "change_red", payload: COLOR_INCREMENT })
        }
        funcLess={() =>
          dispatchColors({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCouter
        title="Green"
        funcPlus={() =>
          dispatchColors({ type: "change_green", payload: COLOR_INCREMENT })
        }
        funcLess={() =>
          dispatchColors({
            type: "change_green",
            payload: -1 * COLOR_INCREMENT,
          })
        }
      />
      <ColorCouter
        title="Blue"
        funcPlus={() =>
          dispatchColors({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        funcLess={() =>
          dispatchColors({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorViewer r={colors.red} g={colors.green} b={colors.blue} />
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
