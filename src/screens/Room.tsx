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


const socket = io("http://192.168.18.25:3001");


const Room = ({ navigation }: any) => {
  const { user } = useUser();
  const [player, setPlayer] = useState([]);

  const [jumlahPlayer, setJumlahPlayer] = React.useState(0);
  // contdown
  const [countdown, setCountdown] = React.useState<number>(10);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const initialCountdown = 10;

  // JANGAN DIHAPUS YEE
  // useEffect(() => {
  //   console.log("useeFFESDA");
  //   socket.emit("join_room", user?.firstName);
  //   socket.on("player_joined", (data: any) => {
  //     console.log(data);
  //   });
  // }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {

      interval = setInterval(() => { 
        setCountdown(prevCountdown => {

          if (prevCountdown === 1) {
            clearInterval(interval);
            setIsRunning(false);
            navigation.navigate("quiz");
            return initialCountdown;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [initialCountdown, isRunning]);

  useEffect(() => {
    // Start countdown when component is mounted
    setIsRunning(true);

    // Ensure countdown restarts when component is navigated back to
    const unsubscribe = navigation.addListener("focus", () => {
      setCountdown(initialCountdown);
      setIsRunning(true);
    });

    return unsubscribe;
  }, [initialCountdown]);

  useEffect(() => {
    const batasPlayer = dataPlayer.filter((_, index) => index < 5);
    setJumlahPlayer(batasPlayer.length);
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
        <AvatarImage
          source={{
            uri: item.image,
          }}
        />
      </Avatar>
      <Text
        px={"$2"}
        fontWeight="bold"
        color="$white"
        fontSize={"$2xl"}
        alignItems="center"
      >
        {item.name}
      </Text>
    </Box>
  );

  const RenderItem: ListRenderItem<IPLayer> = ({ item }) => (
    <Player item={item} />
  );

  return (
    <Background>
      <View
        height={"100%"}
        // justifyContent={"center"}
        flexDirection="column"
        // alignItems={"center"}
        // px={30}
      >
        <Pressable
          h="20%"
          display="flex"
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems="center"
          //   bg="yellow"
          px={30}
          mt={-50}
          onPress={() => navigation.navigate("profile")}
          //   top={-80}
        >
          <Feather name="x-octagon" size={24} color="black" />
        </Pressable>
        <Box alignItems="center" top={ms(20)} justifyContent="center">
          <Text fontWeight={"bold"} fontSize={"$6xl"}>
            00 : {countdown}
          </Text>
          <Text fontSize={"$3xl"}>Waiting Room</Text>
          <Box flexDirection="row" display="flex">
            <Text fontSize={"$3xl"} style={{ color: "green" }}>
              {jumlahPlayer}
            </Text>
            <Text fontSize={"$3xl"}> / 5</Text>
          </Box>
          <Box mt={ms(20)}>
            <FlatList
              data={dataPlayer}
              renderItem={RenderItem}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ gap: 10 }}
              // style={{ marginTop: }}
            />
          </Box>
        </Box>
      </View>
    </Background>
  );
};

export default Room;

const styles = StyleSheet.create({});
