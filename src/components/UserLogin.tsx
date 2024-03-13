import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const UserLogin = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <Text>Hello, {user.firstName} welcome to Clerk</Text>;
};

export default UserLogin;
