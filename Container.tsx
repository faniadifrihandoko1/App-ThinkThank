import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import LoginPage from "./src/screens/LoginPage";

type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >
        <Stack.Screen name="/" component={LoginPage} />
      </Stack.Navigator>
    </>
  );
};

export default Container;
