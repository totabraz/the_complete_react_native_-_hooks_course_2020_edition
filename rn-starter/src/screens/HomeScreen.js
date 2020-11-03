import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { buttonsStyle } = styles;
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("Components");
        }}
        title={"Componets Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("List");
        }}
        title={"Lists Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("ListImages");
        }}
        title={"Images Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title={"Counter Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("Color");
        }}
        title={"Color Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("ColorSeclector");
        }}
        title={"Color Seclector Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("TextInput");
        }}
        title={"Text Input Screen"}
      />
      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("BoxScreen");
        }}
        title={"Box Screen"}
      />

      <Button
        style={buttonsStyle}
        onPress={() => {
          navigation.navigate("MtgCounter");
        }}
        title={"Mtg Counter Screen"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonsStyle: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default HomeScreen;
