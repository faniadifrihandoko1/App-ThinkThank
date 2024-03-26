import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Text } from "@gluestack-ui/themed";
import { io } from "socket.io-client";

const socket = io("http://192.168.18.222:8000");

const CountdownRoom = ({ navigation }: any) => {
  const [timer, setTimer] = React.useState(10);
  useEffect(() => {
    socket.on("timer", (second) => {
      console.log(second);
      setTimer(second);
      if (second === 1) {
        navigation.navigate("quiz");
      }
    });
  }, []);
  return (
    <Text fontWeight={"bold"} fontSize={"$6xl"}>
      00: {timer}
    </Text>
  );
};

export default CountdownRoom;

const styles = StyleSheet.create({});
