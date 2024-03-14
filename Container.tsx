import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import InGame from "./src/screens/InGame";
import { NavigationContainer } from "@react-navigation/native";
import Store from "./src/screens/Store";
import Profile from "./src/screens/Profile";
import AvatarModal from "./src/modal/AvatarModal";
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
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={ProfileUser} />
        <Stack.Screen name="modal-avatar" component={AvatarModal} />
        <Stack.Screen name="in-game" component={InGame} />
        {/* <Stack.Screen name="store" component={Store} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
