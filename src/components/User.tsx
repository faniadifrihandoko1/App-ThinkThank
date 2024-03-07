import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
};

const User = (props: Props) => {
  return (
    <View className="flex flex-row items-center justify-between px-6 mt-4 space-x-4 ">
      <View className="flex flex-row items-center space-x-4">
        <Image src={props.src} className="w-10 h-10 rounded-full" />
        <Text className="font-bold">{props.username}</Text>
      </View>
      <Pressable>
        <Text className="bg-blue-500 px-4 py-2 rounded-lg">Follow</Text>
      </Pressable>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
