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
import { useColorScheme, AppearanceProvider } from "react-native-appearance";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Test1Drawer from "./Test1Drawer";
import Test2Drawer from "./Test2Drawer";
import Test3Drawer from "./Test3Drawer";
import Test4Drawer from "./Test4Drawer";
import Notifications from "../Screens/Notifications";

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

// const colorScheme = useColorScheme();

// const MyTheme = {
//   dark: false,
//   colors: {
//     primary: "white",
//     background: "white",
//     card: "#65509f",
//     text: "white",
//     border: "green",
//   },
// };

// const linking = {
//   prefixes: ["recipes://"],
//   config: {
//     screens: {
//       Feed: "feed/:title",
//       Detail: "detail/:foodName",
//       BottomTabs: {
//         path: "bottom_tabs",
//         screens: {
//           Tab1: {
//             path: "bTab1",
//             exact: true,
//           },
//           Tab2: {
//             path: "bTab2",
//             exact: true,
//           },
//           Tab3: {
//             path: "bTab3",
//             exact: true,
//           },
//         },
//       },
//       TopTabs: {
//         path: "top_tabs",
//         screens: {
//           Tab1: {
//             path: "tTab1",
//             exact: true,
//           },
//           Tab2: {
//             path: "tTab2",
//             exact: true,
//           },
//           Tab3: {
//             path: "tTab3",
//             exact: true,
//           },
//         },
//       },
//       Favorites: "favorites/:user/:id",
//       Contacts: "contacts/:user?",
//       Settings: {
//         path: "settings/:color/:age/:isVerified",
//         parse: {
//           age: Number,
//           isVerified: Boolean,
//           color: (color) => `color-${color}`,
//         },
//       },
//     },
//   },
// };

const AppContainer = createAppContainer(bottomTabNavigator);

const Tab = createMaterialTopTabNavigator();

const Tab1 = createMaterialBottomTabNavigator();

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

      <NavigationContainer>
        <Tab1.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: "#e91e63",
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: "powderblue", marginVertical: 28 },
          }}
        >
          <Tab1.Screen
            name="Feed"
            component={Feed}
            options={{ tabBarLabel: "Home" }}
          />
          <Tab1.Screen
            name="Notifications"
            component={Notifications}
            options={{ tabBarLabel: "Updates" }}
          />
        </Tab1.Navigator>
      </NavigationContainer>
    </View>
  );
};

Navigator.propTypes = {};

export default Navigator;
