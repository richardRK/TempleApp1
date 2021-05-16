import React from "react";
import Feed from "../Screens/Feed";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Stack1 = (props) => {
  return (
    <Stack.Navigator initialRouteName="GymIndex">
      <Stack.Screen name="GymIndex" component={Feed} />
    </Stack.Navigator>
  );
};

export default Stack1;
