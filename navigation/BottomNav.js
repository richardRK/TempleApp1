import React from "react";

import { View } from "react-native";

import Colors from "../constants/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-top-tabs";
import Drawer1 from "./Drawer1";
import Drawer2 from "./Drawer2";
import TemplesScreen from "../screens/TemplesScreen";
import PanditsScreen from "../screens/PanditsScreen";

const BottomNav = (props) => {

    
  const TemplesNavigator = createStackNavigator(
    {
      Temples: TemplesScreen,
    },
    {
      defaultNavigationOptions: defaultStackNavOptions,
    }
  );

  const PanditsNavigator = createStackNavigator(
    {
      Pandits: PanditsScreen,
    },
    {
      defaultNavigationOptions: defaultStackNavOptions,
    }
  );

  const tabScreenConfig = {
    Temples: {
      screen: TemplesNavigator,
      path: "Temples",
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
      path: "Pandits",
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
  };

  createMaterialBottomTabNavigator(tabScreenConfig);

  //   return (
  //     <View style={{ flex: 1 }}>
  //       <NavigationContainer>
  //         <Tab.Navigator
  //           initialRouteName="Feed"
  //           tabBarOptions={{
  //             activeTintColor: "white",
  //             labelStyle: { fontSize: 12 },
  //             style: { backgroundColor: Colors.primaryColor },
  //           }}
  //         >
  //           <Tab.Screen
  //             name="Categories"
  //             component={Drawer1}
  //             options={{ tabBarLabel: "Home" }}
  //           />
  //           <Tab.Screen
  //             name="Music"
  //             component={Drawer2}
  //             options={{ tabBarLabel: "Updates" }}
  //           />
  //         </Tab.Navigator>
  //       </NavigationContainer>
  //     </View>
  //   );
};

BottomNav.propTypes = {};

export default BottomNav;
