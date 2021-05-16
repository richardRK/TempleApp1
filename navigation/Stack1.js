import React from "react";
import Feed from "../Screens/Feed";

import { createStackNavigator } from "@react-navigation/stack";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Stack1 = (props) => {
  return (
    <Stack.Navigator initialRouteName="GymIndex">
      <Stack.Screen
        name="GymIndex"
        component={Feed}
        options={({ navigation }) => ({
          title: "React Navigation",
          headerLeft: () => (
            <Icon
              onPress={() => props.navigation.toggleDrawer()}
              style={[{ color: "green", marginLeft: 8 }]}
              size={24}
              name={"menu"}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Stack1;
