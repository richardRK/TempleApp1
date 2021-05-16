import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Screens/Notifications";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Stack2 = (props) => {
  return (
    <Stack.Navigator initialRouteName="GymIndex">
      <Stack.Screen name="GymIndex" component={Notifications}
      
      
      />
    </Stack.Navigator>
  );
};

Stack2.propTypes = {};

export default Stack2;
