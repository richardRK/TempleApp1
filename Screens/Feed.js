import React from "react";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";

import { View, Text, Button } from "react-native";

const Feed = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      {/* <Button title="Open drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
};

Feed.propTypes = {};

export default Feed;
