import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
  const { textStyle, infoNameStyle } = styles;
  const friends = [
    { name: "Friend #1", age: "1" },
    { name: "Friend #2", age: "2" },
    { name: "Friend #3", age: "3" },
    { name: "Friend #4", age: "4" },
    { name: "Friend #5", age: "5" },
    { name: "Friend #6", age: "6" },
    { name: "Friend #7", age: "7" },
    { name: "Friend #8", age: "8" },
    { name: "Friend #9", age: "9" },
    { name: "Friend #10", age: "10" },
    { name: "Friend #11", age: "11" },
    { name: "Friend #12", age: "12" },
    { name: "Friend #13", age: "13" },
    { name: "Friend #14", age: "14" },
    { name: "Friend #15", age: "15" },
    { name: "Friend #16", age: "16" },
    { name: "Friend #17", age: "17" },
    { name: "Friend #18", age: "18" },
    { name: "Friend #19", age: "19" },
    { name: "Friend #20", age: "20" },
    { name: "Friend #21", age: "21" },
    { name: "Friend #22", age: "22" },
    { name: "Friend #23", age: "23" },
    { name: "Friend #24", age: "24" },
    { name: "Friend #25", age: "25" },
    { name: "Friend #26", age: "26" },
    { name: "Friend #27", age: "27" },
    { name: "Friend #28", age: "28" },
    { name: "Friend #29", age: "29" },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <View style={infoNameStyle}>
            <Text style={textStyle}>{item.name}</Text>
            {item.age && <Text style={textStyle}> - {item.age}</Text>}
          </View>
        );
      }}
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 5,
  },
  infoNameStyle: {
    display: "flex",
    flexDirection: "row",
  },
});
export default ListScreen;
