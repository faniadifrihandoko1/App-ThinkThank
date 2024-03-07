import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "@gluestack-ui/themed";

import { Entypo } from "@expo/vector-icons";



const Test = () => {
  return (
    <View>
      <Card style={{ backgroundColor: "red" }}>
        <Entypo name="squared-plus" size={30} color="yellow" />
      </Card>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
