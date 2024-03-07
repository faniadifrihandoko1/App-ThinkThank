import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBox from "./src/components/SearchBox";
import axios from "axios";
import { useState } from "react";
import User from "./src/components/User";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Index from "./src/components/Index";
import Login from "./src/screens/Login";
import Container from "./Container";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Container />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
