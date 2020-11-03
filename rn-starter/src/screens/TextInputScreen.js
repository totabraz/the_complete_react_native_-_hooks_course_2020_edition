import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextInputScreen = () => {
  const [name, setText] = useState("");
  const { input, screenArea } = styles;
  return (
    <View style={screenArea}>
      <Text>Enter a name</Text>
      <TextInput
        style={input}
        value={name}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={(text) => setText(text)}
      />
      {name !== "" && <Text>My name is: {name ?? ""}</Text>}
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  screenArea: {
    margin: 15,
  },
  input: {
    padding: 15,
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
