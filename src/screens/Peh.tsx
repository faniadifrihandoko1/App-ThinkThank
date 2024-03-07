import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button, Pressable } from "@gluestack-ui/themed";
import { Card } from "@gluestack-ui/themed";

import { Entypo } from "@expo/vector-icons";
import colors from "../utils/color";

import '../style/style.css'

type Props = {};

const Peh = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button className="pani">
        <Text>Pani Pantek</Text>
      </Button>

      {/* <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            <Text>Pani Pantek</Text>
        </button> */}
      {/* <Card
        style={{ backgroundColor: colors.PURPLE }}
        borderRadius={20}
        filter="opacity(0.5)"
        width={200}
        height={300}
        alignItems="center"
        justifyContent="center"
      >
        <Entypo name="squared-plus" size={100} color="yellow" />
      </Card> */}
    </View>
  );
};

export default Peh;

