import React, { useState } from "react";
import {
  ListRenderItem,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable,
} from "react-native";

import {
  Input,
  InputSlot,
  InputField,
  Image,
  View,
  Text,
} from "@gluestack-ui/themed";

import logo from "../../assets/logo.png";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styled } from "nativewind";
import dataAvatar, { IDummyAvatar } from "../mocks/dataAvatar";
import { Avatar, AvatarImage, Box, Card } from "@gluestack-ui/themed";
import Background from "../components/Background";
import SignOut from "../components/SignOut";
import { useUser } from "@clerk/clerk-expo";
import UserLogin from "../components/UserLogin";
import { moderateScale as ms } from "react-native-size-matters";
import Index from "../components/Index";
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
  const AvatarDummy = ({ item }: { item: IDummyAvatar }) => (
    <StyledPressable
      className={`
          active:scale-110
    hover:bg-slate-950`}
      onPress={() => handleAvatar(item.id)}
    >
      <Avatar w={70} h={70}>
        <AvatarImage
          source={{
            uri: item.image,
          }}
        />
        {selectedAvatar === item.id && (
          <Box
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <FontAwesome name="check-circle" size={30} color="white" />
          </Box>
        )}
      </Avatar>
    </StyledPressable>
  );
  const renderItem: ListRenderItem<IDummyAvatar> = ({ item }) => (
    <AvatarDummy item={item} />
  );

  return (
    <Background>
      <KeyboardAvoidingView>
        <ScrollView>
          <View height={"100%"}>
            <Box alignItems="center">
              <View
                style={{ width: 350, alignItems: "center" }}
                height={"100%"}
                marginBottom={60}
              >
                <View style={{ alignItems: "center", marginTop: 60 }}>
                  <Image style={{ width: 260, height: 200 }} source={logo} />
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
                  <FlatList
                    data={dataAvatar}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => Index.toString()}
                    contentContainerStyle={{ alignItems: "center" }}
                    numColumns={4}
                  />
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
                  onPressIn={handleHoverIn}
                  onPressOut={handleHoverOut}
                  onPress={() => navigation.navigate("profile")}
                >
                  <Text style={styles.text}>Continue</Text>
                </Pressable>
                <SignOut />
              </View>
            </Box>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    paddingTop: 10,
  },
  buttonHovered: {
    backgroundColor: "gray",
    color: "white",
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
