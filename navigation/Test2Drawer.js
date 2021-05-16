import React from "react";
import Notifications from "../Screens/Notifications";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack2 from "./Stack2";

const Drawer = createDrawerNavigator();

const Test2Drawer = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Gym" component={Stack2} />
    </Drawer.Navigator>
  );
};

export default Test2Drawer;
