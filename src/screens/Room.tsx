import { StyleSheet } from "react-native";
import {
  Avatar,
  AvatarImage,
  Box,
  Text,
  View,
  Pressable,
} from "@gluestack-ui/themed";

import React from "react";
import Background from "../components/Background";
import { Feather } from "@expo/vector-icons";
import { FlatList, ListRenderItem } from "react-native";
import { IPLayer } from "../mocks/dataPlayer";
import { moderateScale as ms } from "react-native-size-matters";
import { io } from "socket.io-client";
import userStore from "../store/user";
import CountdownRoom from "../components/CountdownRoom";
import { useStore } from "zustand";
const socket = io("http://192.168.18.25:3000");
const Room = ({ navigation }: any) => {
  const [timer, setTimer] = React.useState(0);
  const [userCount, setUserCount] = React.useState(0);
  const [userRoom, setUserRoom] = React.useState([]);
  const username = userStore((state) => state.user.username);
  const avatar = userStore((state) => state.user.avatar);
  const id = userStore((state) => state.user.id);
  React.useEffect(() => {
    socket.emit("dataPlayer", socket.id, username, avatar);
    socket.on("usersInRoom", (data) => {
      console.log(data);
      console.log(data.length);
      setUserRoom(data);
    });
    socket.on("countdown", (second) => {
      console.log(second);
      setTimer(second);
      if (second === 1 && userCount < 5) {
        navigation.navigate("profile");
        alert("player tidak memenuhi room yaitu 5 player");
      }
    });

    socket.on("usersCount", (data) => {
      console.log(data);
      setUserCount(data);
    });

    socket.on("game", (data: any) => {
      console.log(data);
    });

    socket.on("moveTogameRoom", () => {
      navigation.navigate("quiz");
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const handleClose = () => {
    socket.emit("disconnect", () => {
      console.log("keluar dong");
      navigation.navigate("profile");
    });
  };

  // const closeRoom = (navigation: any) => {
  //   socket.emit("logout");
  //   navigation.navigate("profile");
  // };

  const Player = ({ item, index }: any) => (
    <Box
      key={index}
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
      <Avatar w={45} h={45}>
        <AvatarImage
          alt="avatar"
          source={
            item.avatar
              ? item.avatar
              : "https://e7.pngegg.com/pngimages/700/962/png-clipart-computer-icons-smiley-emoticon-anonymity-smiley-miscellaneous-smiley.png"
          }
        />
      </Avatar>
      <Text
        px={"$2"}
        fontWeight="bold"
        color="$white"
        fontSize={"$2xl"}
        alignItems="center"
      >
        {item.username ? item.username : "Guest"}
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
          // onPress={() => closeRoom(navigation)}
        >
          <Feather
            name="x-octagon"
            onPress={() => handleClose()}
            size={24}
            color="black"
          />
        </Pressable>
        <Box alignItems="center" top={ms(20)} justifyContent="center">
          <Text fontWeight={"bold"} fontSize={"$6xl"}>
            00: {timer}
          </Text>
          <Text fontSize={"$3xl"}>Waiting Room</Text>
          <Box flexDirection="row" display="flex">
            <Text fontSize={"$3xl"} style={{ color: "green" }}>
              {userCount}
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
