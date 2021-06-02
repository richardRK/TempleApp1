import React, { useState } from "react";
import { CATEGORIES } from "../data/dummy-data";

import CategoriesScreen from "../screens/CategoriesScreen";
import MusicScreen from "../screens/MusicScreen";

import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Image,
} from "react-native";

import { SearchBar } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Drawer1 from "./Drawer1";
import Drawer2 from "./Drawer2";

const Tab = createMaterialTopTabNavigator();

const TopNavigation = (props) => {
  const [categories, setFilterCategory] = useState(CATEGORIES);

  const filterCategory = (text) => {
    const newData = CATEGORIES.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setFilterCategory(newData);
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: "white",
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: Colors.primaryColor },
          }}
        >
          <Tab.Screen
            name="Categories"
            component={Drawer1}
            options={{ tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="Music"
            component={Drawer2}
            options={{ tabBarLabel: "Updates" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

TopNavigation.navigationOptions = (navData) => {
  const filterCategory = (text) => {
    const newData = CATEGORIES.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    return newData;

    //setFilterCategory(newData);
  };

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
          {/* <Ionicons
            style={styles.icon1}
            name="search-outline"
            size={20}
            color="white"
            onPress={() => filterCategory}
          /> */}

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

          {/* <SearchBar
            style={styles.searchbar}
            containerStyle={styles.searchcontainer}
            placeholder="Type Here..."
            onChangeText={(text) => {
              TopNavigation.filterCategory(text);
            }}
            value={TopNavigation.categories}
            autoCorrect={false}
          /> */}
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
    // paddingTop: 3,
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

TopNavigation.propTypes = {};

export default TopNavigation;
