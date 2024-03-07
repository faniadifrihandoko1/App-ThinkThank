import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
  Image,
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import logo from "../../assets/logo.png";
import { FontAwesome } from "@expo/vector-icons";

import { Avatar, AvatarImage, Box, Card } from "@gluestack-ui/themed";
import dataAvatar from "../mocks/dataAvatar";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);
const Home = () => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [name, setName] = React.useState("");

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
                          style={{ position: "absolute", right: 0, bottom: 0 }}
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

              <TextInput
                className="border-2 my-4 border-white text-white rounded-2xl p-2 w-full mt-8 "
                placeholder="Enter your name"
                onChange={(e: any) => setName(e.target.value)}
              />
              <Pressable
                className="bg-white  border-spacing-4 p-3 w-full rounded-2xl"
                onPress={handleSubmit}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Continue
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
