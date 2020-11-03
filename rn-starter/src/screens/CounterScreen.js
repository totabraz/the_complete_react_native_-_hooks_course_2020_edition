import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { value: state.value + action.payload };

    case "decrease":
      return { value: state.value - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [counter, dispatchCounter] = useReducer(reducer, initialState);

  const { displayStyle, buttonsAreaStyle, buttonStyle, btnView } = styles;
  return (
    <View>
      <View style={buttonsAreaStyle}>
        <View style={btnView}>
          <Button
            style={buttonStyle}
            title={"+"}
            onPress={() => dispatchCounter({ type: "increase", payload: 1 })}
          />
        </View>
        <View style={btnView}>
          <Button
            style={buttonStyle}
            title={"-"}
            onPress={() => {
              if (counter.value > 0)
                dispatchCounter({ type: "decrease", payload: 1 });
            }}
          />
        </View>
      </View>
      <Text style={displayStyle}>Current Counter: {counter.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  displayStyle: {
    fontSize: 30,
  },
  buttonsAreaStyle: {
    display: "flex",
    flexDirection: "column",
  },
  btnView: {
    marginBottom: 15,
  },
  buttonStyle: {
    flex: 1,
    padding: 10,
  },
});

export default CounterScreen;
