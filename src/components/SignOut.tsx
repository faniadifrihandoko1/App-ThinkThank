import { StyleSheet, View } from "react-native";
import React from "react";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { Pressable, Text } from "@gluestack-ui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Pressable
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        py={20}
        onPress={() => signOut()}
      >
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        <Text fontSize={18} fontWeight={"bold"}>
          Sign Out
        </Text>
      </Pressable>
    </View>
  );
};

export default SignOut;

const styles = StyleSheet.create({});
