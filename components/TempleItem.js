import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from "./DefaultText";

const TempleItem = (props) => {
  return (
    <View style={styles.templeItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={props.imageUrl} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.address}</DefaultText>
            <DefaultText>{props.timings}</DefaultText>
            {/* <DefaultText>{props.details}</DefaultText> */}
          </View>
          
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  templeItem: {
    flex: 1,
    height: 300,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  bgImage: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mealRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mealHeader: {
    alignSelf: "flex-end",
    height: "85%",
    alignItems: "center",
  },
  mealDetail: {
    alignSelf: "flex-end",
    alignItems: "center",
    height: "10%",
  },
  titleContainer: {
    flex: 3,
    backgroundColor: "skyblue",
    textAlign: "center",
    alignSelf: "flex-end",
  },
  title: {

    flexDirection: "row",
    flexWrap: "wrap",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default TempleItem;
