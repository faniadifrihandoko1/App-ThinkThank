import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import ProfileUser from "./src/screens/ProfileUser";
// import Test from "./src/screens/test";

import LoginPage from "./src/screens/LoginPage";
import AuthRoute from "./src/route/AuthRoute";

type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="profile" component={ProfileUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
