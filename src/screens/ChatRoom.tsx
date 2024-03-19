import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Button, Input, InputField } from "@gluestack-ui/themed";

const socket = io("http://192.168.18.25:3001");

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_messages", message);
  };

  useEffect(() => {
    socket.on("receive_messages", (data: any) => {
      setMessageReceived(data.message);
    });
  });
  return (
    <View>
      <Text>ChatRoom</Text>
      <Text>{messageReceived}</Text>
      <Input>
        <InputField onChange={(e: any) => setMessage(e.target.value)} />
      </Input>
      <Button onPress={sendMessage} />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({});
