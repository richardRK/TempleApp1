import React from "react";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MusicScreen from "../screens/MusicScreen";
import Colors from "../constants/Colors";
import Register from "../screens/Register";
import TemplesScreen from "../screens/TemplesScreen";
import OnBoardingScreen from "../screens/Onboarding";
import BlogScreen from "../screens/BlogScreen";
import PanditsScreen from "../screens/PanditsScreen";
import CategoryTempleScreen from "../screens/CategoryTempleScreen";
import TempleDetailScreen from "../screens/TempleDetailScreen";

import TopNavigation from "../navigation/TopNavigation";
import BottomNav from "./BottomNav";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  // headerTitle: "A Screen",
};

const TopTabNavigator = createStackNavigator({
  Categories: {
    screen: TopNavigation,
  },
});


const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const TemplesNavigator = createStackNavigator(
  {
    Temples: TemplesScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const PanditsNavigator = createStackNavigator(
  {
    Pandits: PanditsScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MusicNavigator = createStackNavigator(
  {
    Music: MusicScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: BlogScreen,
    // MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals2: {
    screen: TopTabNavigator,
    path: "",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="home" size={20} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      // tabBarVisible:false,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Home</Text>
        ) : (
          "Home"
        ),
    },
  },

  Temples: {
    screen: TemplesNavigator,
    // path: "Temples",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="trail-sign" size={20} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Temples</Text>
        ) : (
          "Temples"
        ),
    },
  },

  Pandits: {
    screen: PanditsNavigator,
    // path: "Pandits",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="person-circle-outline"
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Pandits</Text>
        ) : (
          "Pandits"
        ),
    },
  },

  Music: {
    screen: MusicNavigator,
    // path: "Music",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-musical-notes"
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Music</Text>
        ) : (
          "Music"
        ),
    },
  },

  Blog: {
    screen: BlogNavigator,
    // path: "Blog",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="document-text-outline"
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Blog</Text>
        ) : (
          "Blog"
        ),
    },
  },

  Favorites: {
    screen: FavNavigator,
    // path: "Favorites",
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarVisible:true,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
        // initialRouteName:'Temples'
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Splash: {
      screen: OnBoardingScreen,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },

    Register: {
      screen: Register,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },

    

    MealsFavs: {
      screen: MealsFavTabNavigator,
      // DefaultScreen: {
      //   screen: CategoriesScreen,
      // },
      // initialRouteName:'Music',

      navigationOptions: {
        drawerLabel: "Meals",
        // initialRouteName:'Music'
      },
    },

    Filters: FiltersNavigator,
  },
  
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
