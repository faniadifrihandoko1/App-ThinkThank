import { Animated, StyleSheet } from "react-native";
import {
  Avatar,
  AvatarImage,
  Box,
  Card,
  Text,
  View,
  Pressable,
} from "@gluestack-ui/themed";

import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import { Feather } from "@expo/vector-icons";
import { FlatList, ListRenderItem } from "react-native";
import dataPlayer, { IPLayer } from "../mocks/dataPlayer";
import { moderateScale as ms } from "react-native-size-matters";
import { io } from "socket.io-client";
import { useUser } from "@clerk/clerk-expo";
import userStore from "../store/user";

const socket = io("http://192.168.18.25:3000");

const Room = ({ navigation }: any) => {
  const [timer, setTimer] = React.useState(15);
  const [userRoom, setUserRoom] = React.useState([]);
  const username = userStore((state) => state.user.username);
  React.useEffect(() => {
    socket.emit("join_room", {
      username: username,
      socketId: socket.id,
    });
    socket.on("join_room", (users) => {
      console.log(users.users.length);
      setUserRoom(users.users);
    });
    console.log(userRoom.length);
    socket.on("timer", (second) => {
      console.log(second);
      setTimer(second);
      if (second === 1) {
        navigation.navigate("quiz");
      }
    });
  }, []);

  const Player = ({ item }: { item: IPLayer }) => (
    <Box
      p={"$4"}
      height={"auto"}
      px={"$4"}
      borderColor="$white"
      borderWidth={1}
      alignItems="center"
      rounded={"$xl"}
      backgroundColor="rgba(52, 52, 52, 0.8)"
      flexDirection="row"
    >
      <Avatar w={50} h={50}>
        <AvatarImage source="https://i.ibb.co/wCnzdSL/premium-Avatar1.png" />
      </Avatar>
      <Text
        px={"$2"}
        fontWeight="bold"
        color="$white"
        fontSize={"$2xl"}
        alignItems="center"
      >
        {item.username}
      </Text>
    </Box>
  );

  const RenderItem: ListRenderItem<IPLayer> = ({ item }) => (
    <Player item={item} />
  );

  return (
    <Background>
      <View height={"100%"} flexDirection="column">
        <Pressable
          h="20%"
          display="flex"
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems="center"
          px={30}
          mt={-50}
          onPress={() => navigation.navigate("profile")}
        >
          <Feather name="x-octagon" size={24} color="black" />
        </Pressable>
        <Box alignItems="center" top={ms(20)} justifyContent="center">
          <Text fontWeight={"bold"} fontSize={"$6xl"}>
            00 : {timer}
          </Text>
          <Text fontSize={"$3xl"}>Waiting Room</Text>
          <Box flexDirection="row" display="flex">
            <Text fontSize={"$3xl"} style={{ color: "green" }}>
              {userRoom.length}
            </Text>
            <Text fontSize={"$3xl"}> / 5</Text>
          </Box>
          <Box mt={ms(20)}>
            <FlatList
              data={userRoom}
              renderItem={RenderItem}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ gap: 10 }}
            />
          </Box>
        </Box>
      </View>
    </Background>
  );
};

export default Room;

const styles = StyleSheet.create({});
