import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {
  Image,
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";

import {
  Input,
  InputSlot,
  InputField,
  InputIcon,
  EditIcon,
  Icon,
} from "@gluestack-ui/themed";

import logo from "../../assets/logo.png";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styled } from "nativewind";
import dataAvatar from "../mocks/dataAvatar";
import { Avatar, AvatarImage, Box, Card } from "@gluestack-ui/themed";
const StyledPressable = styled(Pressable);
const Home = () => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [name, setName] = React.useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleSubmit = () => {
    const postProfile = {
      avatarId: selectedAvatar,
      name: name,
    };
    // console.log(postProfile)
  };

  const postProfile = async (e: React.FormEvent<HTMLInputElement>) => {};
  const handleAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ImageBackground>
          <View className="flex-1 justify-center bg-black">
            <View className="  items-center">
              <View className="w-3/4 items-center">
                <View className="mt-20 items-center">
                  <Image
                    className="w-52 -rotate-6 h-40 filter drop-shadow-2xl fill-neutral-800000"
                    source={logo}
                  />
                  <Text className=" text-white text-[20px] font-bold ">
                    CHOOSE YOUR AVATAR
                  </Text>
                </View>
                <Box
                  my={30}
                  bg="transparent"
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  gap={9}
                  p={2}
                  maxWidth={"100%"}
                  justifyContent="center"
                >
                  {dataAvatar.map((data) => (
                    <StyledPressable
                      className={`
                  active:scale-110
                hover:bg-slate-950
                
              `}
                      key={data.id}
                      onPress={() => handleAvatar(data.id)}
                    >
                      <Avatar w={80} h={80}>
                        <AvatarImage
                          source={{
                            uri: data.image,
                          }}
                        />
                        {selectedAvatar === data.id && (
                          <Box
                            style={{
                              position: "absolute",
                              right: 0,
                              bottom: 0,
                            }}
                          >
                            <FontAwesome
                              name="check-circle"
                              size={30}
                              color="white"
                            />
                          </Box>
                        )}
                      </Avatar>
                    </StyledPressable>
                  ))}
                </Box>

                <Input borderRadius={10} borderColor="white" marginBottom={30}>
                  <InputSlot pl="$3">
                    {/* <InputIcon as={EditIcon} /> */}
                    {/* <Icon as={EditIcon} m="$2" w="$4" h="$4" /> */}
                    <Feather name="edit" size={24} color="white" />
                  </InputSlot>
                  <InputField
                    onChange={(e: any) => setName(e.target.value)}
                    color="white"
                    placeholder="Enter your name"
                  />
                </Input>

                {/* <TextInput
                className="border-2 my-4 border-white text-white rounded-2xl p-2 w-full mt-8 "
                placeholder="Enter your name"
                onChange={(e: any) => setName(e.target.value)}
              /> */}
                <Pressable
                  // className="bg-white mb-10 border-spacing-4 p-3 w-full rounded-2xl"
                  style={({ pressed }) => [
                    styles.button,
                    pressed || isHovered ? styles.buttonHovered : null,
                  ]}
                  onPress={() => console.log("Button Pressed")}
                  onPressIn={handleHoverIn}
                  onPressOut={handleHoverOut}
                >
                  <Text style={styles.text}>Continue</Text>
                </Pressable>

                {/* <Pressable
                className="bg-white mb-10 border-spacing-4 p-3 w-full rounded-2xl"
                onPress={handleSubmit}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Continue
                  </Text>
                </View>
              </Pressable> */}
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  buttonHovered: {
    backgroundColor: "gray",
  },
  text: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Home;
