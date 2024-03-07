import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import ImgLogo1 from "../../assets/bapaksripal.png";
import Imgquiz from "../../assets/quiz.png";

import React from "react";
import { styled } from "nativewind";
import colors from "../utils/color";
// import { Image } from "react-native-svg";

import { Box, Image } from "@gluestack-ui/themed";

import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
  Avatar,
  AvatarImage,
} from "@gluestack-ui/themed";

const StyledView = styled(View);

const ProfileUser = () => {
  return (
    <>
      <StyledView
        className="flex-1 items-center h-screen justify-center"
        style={{ backgroundColor: colors.BLUE }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          padding={10}
          bottom={80}
        >
          <FontAwesome5 name="user-alt" size={27} color="white" />
          <Box display="flex" flexDirection="row" width={"20%"}>
            <TextInput
              className="border-2 text-[10px] my-3 text-center border-black  w-50 h-4 text-white rounded-2xl  bg-blue-700"
              placeholder="make a room"
            />
            <Box 
            style={{ position: "absolute", right: 70, bottom: 4 }}>
              <Ionicons name="diamond" size={30} color="white"  />
            </Box>
            <Box 
            style={{ position: "absolute", right: 10, bottom: 7 }}>
              <Entypo name="squared-plus" size={30} color="yellow" />
            </Box>
          </Box>
        </Box>
        <StyledView className="rounded-t-3xl w-full -bottom-7 bg-slate-300 ">
          <StyledView className="flex -top-10 items-center">
            <Avatar size="xl">
              <AvatarImage source={ImgLogo1} />
            </Avatar>
            {/* <Image source={ImgLogo1} className="w-24 h-24 rounded-full" /> */}
            <Text className="text-black text-[18px] font-bold">
              Pani Adi Prinhandoko
            </Text>
          </StyledView>
          <StyledView
            className=" flex flex-col w-auto mx-8  rounded-lg"
            style={{ backgroundColor: colors.MAROON }}
          >
            {/* <StyledView className="flex flex-row bg-none">
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </StyledView> */}
            <StyledView className=" flex flex-row justify-between p-4">
              <Text className="font-bold  align-justify w-1/2 text-[20px] text-white">
                ASAH OTAK ANDA DENGAN QUIZ THINK THANK
              </Text>
              <StyledView className="flex   items-center">
                <Image
                  size="md"
                  //   borderRadius="$none"
                  source={{
                    uri: "https://i.ibb.co/nPTTVTt/quiz.png",
                  }}
                />
                {/* <Image source={Imgquiz} className="w-32 h-32 rounded" />
                <image className=" w-32 h-32 rounded" /> */}
              </StyledView>
            </StyledView>
            {/* <StyledView className="flex flex-row bg-none">
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </StyledView> */}
          </StyledView>
          <StyledView
            className=" my-4 flex flex-col w-auto mx-8 rounded-lg"
            style={{ backgroundColor: colors.PURPLE }}
          >
            <StyledView className="p-4">
              <TextInput
                className="border-2 mb-3 border-black text-white rounded-2xl p-2 w-full"
                style={{ backgroundColor: colors.PURPLE_SOFT }}
                placeholder="Enter name your room"
              />
              <Pressable
                className="bg-white mb-4 border-spacing-4 p-1 w-full rounded-2xl"
                style={{ backgroundColor: colors.YELLOW }}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Buat Room
                  </Text>
                </View>
              </Pressable>
              <Pressable
                className="bg-white  border-spacing-4 p-1 w-full rounded-2xl"
                style={{ backgroundColor: colors.YELLOW }}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Masuk room
                  </Text>
                </View>
              </Pressable>
            </StyledView>
          </StyledView>
          <StyledView className="flex flex-between justify-around flex-row p-4 ">
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
              //   onPress={() => navigation.navigate("Home")}
            >
              <FontAwesome5 name="user-alt" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <FontAwesome5 name="medal" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <FontAwesome6 name="shop" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <MaterialCommunityIcons
                name="comment-question"
                size={24}
                color="white"
              />
            </Button>
          </StyledView>
        </StyledView>
      </StyledView>
    </>
  );
};

export default ProfileUser;
