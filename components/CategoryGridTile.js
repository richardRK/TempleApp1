import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import Card from "../components/UI/Card";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
          <View style={{ ...styles.container }}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>

            <Text style={styles.title} numberOfLines={4}>
              {props.title}
            </Text>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: 200,
    margin: 20,
    // paddingVertical: 20,
    // paddingBottom: 50,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  // gridItem: {
  //   // flex: 1,

  //   margin: 10,
  //   height: 150,
  //   borderRadius: 10,
  //   overflow:
  //     Platform.OS === "android" && Platform.Version >= 21
  //       ? "hidden"
  //       : "visible",
  //   elevation: 5,
  //   // paddingBottom: 50,
  // },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    // flex: 1,
    // flexDirection: "column",

    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    padding: 5,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // flexDirection: "row",
    fontFamily: "open-sans-bold",
    fontSize: 15,
    // textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default CategoryGridTile;
