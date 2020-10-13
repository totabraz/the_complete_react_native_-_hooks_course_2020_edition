import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const { displayStyle, buttonsAreaStyle, buttonStyle } = styles;
  return (
    <View>
      <Text style={displayStyle}>Current Counter: {counter}</Text>
      <View style={buttonsAreaStyle}>
        <Button
          style={buttonStyle}
          title={"+"}
          onPress={() => setCounter(counter + 1)}
        />
        <Button
          style={buttonStyle}
          title={"-"}
          onPress={() => {
            if (counter > 0) setCounter(counter - 1);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayStyle: {
    fontSize: 30,
  },
  buttonsAreaStyle: {
    display: "flex",
    flexDirection: "row",
  },
  buttonStyle: {
    flex: 1,
    padding: 10,
  },
});

export default CounterScreen;
