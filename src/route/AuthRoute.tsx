import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import LoginPage from "../screens/LoginPage";
import * as SecureStore from "expo-secure-store";
import SignOut from "../components/SignOut";
import Home from "../screens/Home";

const tokenCache: any = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};
const AuthRoute = () => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
    >
      <SignedIn>
        <Home />
      </SignedIn>
      <SignedOut>
        <LoginPage />
      </SignedOut>
    </ClerkProvider>
  );
};

export default AuthRoute;

const styles = StyleSheet.create({});
