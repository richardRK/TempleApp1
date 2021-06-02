import React from "react";
import PropTypes from "prop-types";

import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CategoriesScreen from "../screens/CategoriesScreen";
const Stack = createStackNavigator();

import CategoryTempleScreen from "../screens/CategoryTempleScreen";

import TempleDetailScreen from "../screens/TempleDetailScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack1 = (props) => {
  const res = props;
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryTemples" component={CategoryTempleScreen} />
      <Stack.Screen name="TempleDetail" component={TempleDetailScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

Stack1.propTypes = {};

export default Stack1;
