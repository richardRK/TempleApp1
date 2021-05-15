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
  tabs = [
    {
      key: "games",
      icon: "gamepad-variant",
      label: "Games",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "movies",
      icon: "movie",
      label: "Movies & TV",
      barColor: "#B71C1C",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
    {
      key: "music",
      icon: "music-note",
      label: "Music",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)",
    },
  ];

  state = {
    activeTab: "games",
  };

  renderIcon =
    (icon) =>
    ({ isActive }) =>
      <Icon size={24} color="white" name={icon} />;

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: "#e91e63",
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: "powderblue", marginVertical: 68 },
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{ tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notification}
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
