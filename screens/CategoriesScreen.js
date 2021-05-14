import React, { useState, useEffect, useCallback } from "react";
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
import { SearchBar } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import { useColorScheme, AppearanceProvider } from "react-native-appearance";

import {
  NavigationContainer,
  DarkTheme,
  DrawerActions,
} from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Music from "../screens/MusicScreen";
import Fav from "../screens/FavoritesScreen";

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
          props.navigation.navigate({
            routeName: "CategoryTemples",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const MainStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Music" component={Music} />
      </Stack.Navigator>
    );
  };

  const FavStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Favorite" component={Fav} />
      </Stack.Navigator>
    );
  };

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainStackNavigator} />
        <Tab.Screen name="Fav" component={FavStackNavigator} />
      </Tab.Navigator>
    );
  };

  return (
    <View>
      <NavigationContainer>
        {/* <MainStackNavigator /> */}
        {/* <DrawerNavigator /> */}
        <BottomTabNavigator />
      </NavigationContainer>
      <SearchBar
        style={styles.searchbar}
        containerStyle={styles.searchcontainer}
        // placeholderTextColor={"#g5g5g5"}
        placeholder="Type Here..."
        // lightTheme
        // round
        onChangeText={(text) => {
          filterCategory(text);
        }}
        value={categories}
        autoCorrect={false}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={categories}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  // arrayholder = [];

  return {
    headerTitle: "",
    headerStyle: {
      height: 100,
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerLeft: (
      <View style={styles.screen}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            style={styles.hamburger}
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
            name="language-outline"
            size={20}
            color="white"
          />

          <Ionicons
            style={styles.icon1}
            name="location-outline"
            size={20}
            color="white"
          />

          <Ionicons
            style={styles.icon1}
            name="ios-notifications"
            size={20}
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
    paddingTop: 5,
    // marginTop: 20,
  },
  searchcontainer: {
    backgroundColor: Colors.primaryColor,
    borderWidth: 0, //no effect
    shadowColor: Colors.primaryColor, //no effect
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchbar: {
    width: "70%",
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
