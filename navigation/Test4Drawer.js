import PropTypes from "prop-types";

import React from "react";
import Stack1 from "./Stack1";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Test4Drawer = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Gym" component={Stack1} />
    </Drawer.Navigator>
  );
};

Test4Drawer.propTypes = {};

export default Test4Drawer;
