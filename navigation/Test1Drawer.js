import React from "react";
import Feed from "../Screens/Feed";
import Stack1 from "./Stack1";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

const Test1Drawer = (props) => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Gym" component={Stack1} />
    </Drawer.Navigator>
  );
};

export default Test1Drawer;
