import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import ProfileUser from "./src/screens/ProfileUser";
import Peh from "./src/screens/Peh";
import LoginPage from "./src/screens/LoginPage";
import Rules from "./src/screens/Rules";
import InGame from "./src/screens/InGame";



type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >

        {/* <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="/profile" component={ProfileUser} /> */}
        <Stack.Screen name="/in-game" component={InGame} />
        {/* <Stack.Screen name="/info" component={Rules} /> */}

      </Stack.Navigator>
    </>
  );
};

export default Container;
