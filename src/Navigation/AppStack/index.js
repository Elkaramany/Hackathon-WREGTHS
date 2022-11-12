import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Index from "@Screens/Games";
import Shooter from "@Screens/Games/Shooter";
import Snake from "@Screens/Games/Snake";
import Hamster from "@Screens/Games/Hamster";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Index'}
    >
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Shooter" component={Shooter} />
      <Stack.Screen name="Snake" component={Snake} />
      <Stack.Screen name="Hamster" component={Hamster} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
