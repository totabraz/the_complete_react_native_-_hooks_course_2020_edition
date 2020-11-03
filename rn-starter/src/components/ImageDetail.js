import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ src, title, score }) => {
  const { imageDetail, image, textStyle, infosStyle } = styles;
  return (
    <View style={imageDetail}>
      <Image style={image} source={src} />
      <View style={infosStyle}>
        <Text style={textStyle}>{title}</Text>
        <Text style={textStyle}> - {score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageDetail: {
    // display: "flex",
    // flexDirection: "row",
  },
  infosStyle: {
    display: "flex",
    flexDirection: "row",
  },
  //   imageArea: {
  //     flex: 1,
  //     width: "100%",
  //   },
  image: {
    flex: 1,
    width: "100%",
  },

  textStyle: {
    fontSize: 20,
  },
});

export default ImageDetail;
