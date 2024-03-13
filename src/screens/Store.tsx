import { View, Text } from "react-native";
import React from "react";
import { Box, Card, Pressable } from "@gluestack-ui/themed";

const Store = () => {
  return (
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
        position="absolute"
      >
        <Box>
            <Card></Card>
        </Box>

        <Text>Store</Text>
      </Box>
    </View>
  );
};

export default Store;
