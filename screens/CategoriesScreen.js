import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Image,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";


import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

import { Ionicons } from "@expo/vector-icons";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "",
    //   headerTitle: (
    //     <Image source={require("https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg")}/>
    // ),
    // headerBackground: (
    // <Image
    //   style={StyleSheet.absoluteFill}
    //   source={{
    //     uri:
    //       "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
    //   }}
    // />
    // ),
    headerStyle: {
      height: 100,
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerLeft: (
      <View style={styles.screen}>
        <HeaderButtons
          style={styles.hamburger}
          HeaderButtonComponent={HeaderButton}
        >
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      </View>
    ),

    headerRight: (
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.icons}
          // onPress={() => navigation.navigate({ routeName: "Notification" })}
        >
    
          <Ionicons
            style={styles.icon1}
            name="ios-notifications"
            size={25}
            color="white"
          />
          <Ionicons
            style={styles.icon2}
            name="globe-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  hamburger: {
    flexDirection: "row",
  },
  icons: {
    flexDirection: "row",
  },

  img: {
    flexDirection: "row",
    padding: 20,
    // width: 200,
    // height: 60,
    // resizeMode: "contain",
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  icon1: {
    flexDirection: "row",
    padding: 20,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  icon2: {
    flexDirection: "row",
    padding: 20,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
});

export default CategoriesScreen;
