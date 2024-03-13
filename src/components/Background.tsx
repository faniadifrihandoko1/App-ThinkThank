import { StyleSheet, Text, View } from "react-native";
import React from "react";
import bg from "../../assets/bg-2.jpeg";
import { ImageBackground } from "@gluestack-ui/themed";

const Background = ({ children }: { children: React.ReactNode }) => {
  return <ImageBackground source={bg}>{children}</ImageBackground>;
};

export default Background;
