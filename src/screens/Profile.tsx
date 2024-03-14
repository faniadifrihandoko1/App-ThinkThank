import { StyleSheet, View } from "react-native";
import React from "react";
import Background from "../components/Background";
import { Box, Text } from "@gluestack-ui/themed";

const Profile = () => {
  return ( 
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          width={"$full"}
          height={"$56"}
        >
          <Text>Profile</Text>
        </Box>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
