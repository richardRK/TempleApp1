import React from "react";
import PropTypes from "prop-types";
import Stack1 from "./Stack1";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Drawer1 = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Stack1} />
    </Drawer.Navigator>
  );
};

Drawer1.propTypes = {};

export default Drawer1;
