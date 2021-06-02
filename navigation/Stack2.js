import React from "react";
import PropTypes from "prop-types";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Stack2 = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="GymIndex"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GymIndex" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

Stack2.propTypes = {};

export default Stack2;
