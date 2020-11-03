import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
import Beach from "../../assets/images/beach.jpg";
import Forest from "../../assets/images/forest.jpg";
import Mountain from "../../assets/images/mountain.jpg";
const ListImagesScreen = ({ navigation }) => {
  const { buttonsStyle } = styles;

  const images = [
    {
      key: "1",
      src: require("../../assets/images/beach.jpg"),
      title: "Image 1 Beach",
      score: 1,
    },
    {
      key: "2",
      src: require("../../assets/images/forest.jpg"),
      title: "Image 2 Forest",
      score: 7,
    },
    {
      key: "3",
      src: require("../../assets/images/mountain.jpg"),
      title: "Image 3 Mountain",
      score: 9,
    },
  ];
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => {
        return (
          <ImageDetail src={item.src} title={item.title} score={item.score} />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
  },
});

export default ListImagesScreen;
