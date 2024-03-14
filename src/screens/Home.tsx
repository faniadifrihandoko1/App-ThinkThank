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
} from "@gluestack-ui/themed";

import logo from "../../assets/logo.png";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styled } from "nativewind";
import dataAvatar from "../mocks/dataAvatar";
import { Avatar, AvatarImage, Box, Card } from "@gluestack-ui/themed";
import Background from "../components/Background";
import SignOut from "../components/SignOut";
import { useUser } from "@clerk/clerk-expo";
import UserLogin from "../components/UserLogin";
const StyledPressable = styled(Pressable);

const Home = ({ navigation }: any) => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [name, setName] = React.useState("");
  const { user } = useUser();

 

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
  };

  const postProfile = async (e: React.FormEvent<HTMLInputElement>) => {};
  const handleAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };

  
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Background>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box style={{ alignItems: "center" }}>
              <View
                style={{ width: 350, alignItems: "center" }}
              >
                <View style={{ alignItems: "center", marginTop: 50 }}>
                  <Image
                    style={{ width: 260, height: 200 }}
                    source={logo}
                  />
                  <Text
                    style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                  >
                    CHOOSE YOUR AVATAR
                  </Text>
                  <UserLogin />
                </View>
                <Box
                  my={30}
                  bg="transparent"
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  gap={8}
                  p={1}
                  maxWidth={"100%"}
                  justifyContent="center"
                >
                  {dataAvatar.map((data) => (
                    <StyledPressable
                      className={`
                    active:scale-110
                  hover:bg-slate-950`}
                      key={data.id}
                      onPress={() => handleAvatar(data.id)}
                    >
                      <Avatar w={70} h={70}>
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
                    <Feather name="edit" size={24} color="white" />
                  </InputSlot>
                  <InputField
                    onChange={(e: any) => setName(e.target.value)}
                    color="white"
                    placeholder="Enter your name"
                  />
                </Input>
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    pressed || isHovered ? styles.buttonHovered : null,
                  ]}
                  onPress={() => navigation.navigate("profile")}
                  onPressIn={handleHoverIn}
                  onPressOut={handleHoverOut}
                >
                  <Text style={styles.text}>Continue</Text>
                </Pressable>
                <SignOut />
              </View>
            </Box>
          </View>
        </Background>
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
  layar: {
    flex: 1,
    resizeMode: "cover",
    height: 900,
  },
});

export default Home;
