import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import AvatarModal from "./src/modal/AvatarModal";
import ProfileUser from "./src/screens/ProfileUser";
import Room from "./src/screens/Room";
import Quiz from "./src/screens/Quiz";

import Ranking from "./src/screens/Ranking";


type Props = {};

const Container = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={ProfileUser} />
        <Stack.Screen name="room" component={Room} />
        <Stack.Screen name="quiz" component={Quiz} />

        <Stack.Screen name="Ranking" component={Ranking} />

        {/* <Stack.Screen name="store" component={Store} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
