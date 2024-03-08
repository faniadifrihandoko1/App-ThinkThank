import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import ProfileUser from "./src/screens/ProfileUser";
// import Test from "./src/screens/test";
import Peh from "./src/screens/Peh";

type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >
        <Stack.Screen name="/" component={Login} />
        {/* <Stack.Screen name="/" component={Home} /> */}
      </Stack.Navigator>
    </>
  );
};

export default Container;
