import React, { useState } from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Colors from "../constants/Colors";
import { SearchBar } from "react-native-elements";

import Carousel from "../components/Carousel";
import { CAROUSEL_DATA } from "../data/dummy-data";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CategoriesScreen = (props) => {
  const [categories, setFilterCategory] = useState(CATEGORIES);

  const filterCategory = (text) => {
    const newData = CATEGORIES.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setFilterCategory(newData);
  };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate("CategoryTemples", itemData.item.id);
        }}
      />
    );
  };

  return (
    <View>
      <ScrollView>
        <SearchBar
          // autosize={false}
          style={styles.searchbar}
          containerStyle={styles.searchcontainer}
          placeholder="Type Here..."
          onChangeText={(text) => {
            filterCategory(text);
          }}
          value={categories}
          autoCorrect={false}
          // icon={()=><MaterialCommunityIcon name="barcode-scan" size={30}/>}
        />
        <Carousel data={CAROUSEL_DATA} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={categories}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    // marginTop: 20,
  },

  contentContainer: {
    // borderWidth: 2,
    borderColor: "#CCC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  searchcontainer: {
    backgroundColor: Colors.primaryColor,
    borderWidth: 0, //no effect
    shadowColor: Colors.primaryColor, //no effect
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchbar: {
    // flex: 1,
    // width: "85%",
    // height:"5%",
    // backgroundColor: "", //no effect
    borderWidth: 0, //no effect
    shadowColor: Colors.primaryColor, //no effect
  },
  icon3: {
    // justifyContent: "flex-start",
    flexDirection: "row",
    // paddingHorizontal: 28,
    // paddingBottom: theme.SIZES.BASE,
    // paddingTop: 20,
    // justifyContent: 'center',
    padding: 5,
    // marginTop: 5,
  },

  search: {
    // justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    // paddingTop: 5,
  },

  hamburger: {
    // justifyContent: "flex-start",
    flexDirection: "row",
    // paddingTop: 5,
  },
  icons: {
    flexDirection: "row",
  },

  img: {
    flexDirection: "row",
    padding: 20,
  },
  icon1: {
    // justifyContent: "flex-end",
    flexDirection: "row",
    // flexWrap: "wrap",
    // paddingTop: 5,
    padding: 20,
    // marginTop: 20,
  },
  icon2: {
    // justifyContent: "flex-end",
    flexDirection: "row",
    // flexWrap: "wrap",
    // paddingTop: 5,
    padding: 20,
    // marginTop: 20,
  },
});

export default CategoriesScreen;
