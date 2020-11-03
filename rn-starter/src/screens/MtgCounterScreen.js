import React, { useReducer } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";

const initialState = {
  life: 20,
  infect: 0,
};

const reducer = (state, action) => {
  switch (state) {
    case action.type:
      return state;

    default:
      return state;
  }
};

const MtgCounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    componentAreaStyle,
    btnsAreaStyle,
    btnStyle,
    btnTextStyle,
    lifeStyle,
    infectStyle,
    infosStyle,
  } = styles;

  return (
    <View style={componentAreaStyle}>
      <View style={infosStyle}>
        <Text style={lifeStyle}>{state.life}</Text>
        <Text style={infectStyle}>{state.infect}</Text>
      </View>
      <View style={btnsAreaStyle}>
        <TouchableOpacity style={btnStyle}>
          <Text style={btnTextStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnStyle}>
          <Text style={btnTextStyle}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentAreaStyle: {
    ...StyleSheet.absoluteFill,
    display: "flex",
    flex: 1,
    alignItems: "stretch",
    borderWidth: 3,
    borderColor: "black",
  },
  btnsAreaStyle: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderColor: "red",
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  btnStyle: {
    zIndex: 20,
    margin: 15,
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    opacity: 0.1,
    backgroundColor: "black",
  },
  btnTextStyle: {
    fontSize: 100,
    backgroundColor: "blue",
    color: "black",
    alignSelf: "center",
  },

  infosStyle: {
    position: "relative",
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  lifeStyle: {
    fontSize: 150,
  },
  infectStyle: {
    fontSize: 50,
  },
});

export default MtgCounterScreen;
