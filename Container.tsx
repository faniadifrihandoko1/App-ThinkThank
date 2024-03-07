import { StyleSheet, Text, View, SafeAreaView, ScrollView,} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >
        <Stack.Screen name="/" component={Home} />
        {/* <Stack.Screen name="/" component={Home} /> */}
      </Stack.Navigator>
    </>
  );
};

export default Container;
