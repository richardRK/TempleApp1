import React from "react";
import { View } from "react-native";
import { FullTab } from "react-native-material-bottom-navigation";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Notification from "../Screens/Notifications";
import Feed from "../Screens/Feed";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Test1Drawer from "./Test1Drawer";
import Test2Drawer from "./Test2Drawer";

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Notification,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Explore: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#eb6e3d",
    },
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);

const Tab = createMaterialTopTabNavigator();

const Navigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: "#e91e63",
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: "powderblue", marginVertical: 28 },
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Test1Drawer}
            options={{ tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="Notifications"
            component={Test2Drawer}
            options={{ tabBarLabel: "Updates" }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      <AppContainer />
    </View>
  );
};

Navigator.propTypes = {};

export default Navigator;