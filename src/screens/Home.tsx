import React, { useState } from "react";
import {
  ListRenderItem,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

import {
  Input,
  InputSlot,
  Image,
  View,
  Text,
} from "@gluestack-ui/themed";

import logo from "../../assets/logo.png";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import dataAvatar, { IDummyAvatar } from "../mocks/dataAvatar";
import { Avatar, AvatarImage, Box, Card } from "@gluestack-ui/themed";
import Background from "../components/Background";
import SignOut from "../components/SignOut";
import { useUser } from "@clerk/clerk-expo";
import UserLogin from "../components/UserLogin";
import Index from "../components/Index";
import userStore from "../store/user";
import { styled } from "nativewind";
const StyledPressable = styled(Pressable);

const Home = ({ navigation }: any) => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [avatar, setAvatar] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useUser();
  const email = user?.emailAddresses[0].emailAddress;
  const setEmail = userStore((state) => state.setEmail);
  const setAvatarUsername = userStore((state) => state.updateUsernameAvatar);
  React.useEffect(() => {
    if (email) {
      setEmail(email);
    }
  }, [email]);

  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleSubmit = () => {
    console.log(nama);
    setAvatarUsername(nama, avatar);
    if (nama) {
      navigation.navigate("profile");
    } else {
      alert("masukan username");
    }
  };

  const postProfile = async (e: React.FormEvent<HTMLInputElement>) => {};
  const handleAvatar = (avatarId: number, image: string) => {
    setSelectedAvatar(avatarId);
    setAvatar(image);
  };

  const AvatarDummy = ({ item }: { item: IDummyAvatar }) => (
    <StyledPressable
      className={`
          active:scale-110
    hover:bg-slate-950`}
      onPress={() => handleAvatar(item.id, item.image)}
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
                  {/* <InputField
                    onChange={handleChange}
                    color="white"
                    placeholder="Enter your name"
                  /> */}
                  <TextInput
                    style={{ width: "80%" }}
                    onChangeText={(value) => setNama(value)}
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
                  onPress={() => handleSubmit()}
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
