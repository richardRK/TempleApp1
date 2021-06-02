import React from "react";
import PropTypes from "prop-types";
import Stack2 from "./Stack2";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Drawer2 = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Updates" component={Stack2} />
    </Drawer.Navigator>
  );
};

Drawer2.propTypes = {};

export default Drawer2;
