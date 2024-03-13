import React from "react";
import { styled } from "nativewind";
import colors from "../utils/color";

import bg from "../../assets/bg-2.jpeg";
import ImgLogo1 from "../../assets/bapaksripal.png";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Box, Card, Image } from "@gluestack-ui/themed";
import {
  Button,
  Input,
  InputSlot,
  InputField,
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
    <KeyboardAvoidingView>
      <ScrollView>
        <ImageBackground source={bg} className="w-full h-full">
          <StyledView className="flex-1 items-center h-screen justify-center">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width={"100%"}
              padding={10}
              bottom={160}
            >
              <FontAwesome5 name="user-alt" size={27} color="white" />
              <Box display="flex" flexDirection="row" width={"20%"}>
                {/* <Input borderRadius={10} borderWidth={1}  borderColor="white" marginBottom={30}>
                  <InputField
                    // onChange={(e: any) => setName(e.target.value)}
                    color="white"
                    placeholder="Enter your name"
                  />
                </Input> */}
                <Text
                  className="border-2 text-[10px] my-3 text-center border-white  w-full h-5 text-black rounded-2xl  bg-none"
                  // placeholder="make a room"
                >
                  999
                </Text>
                <Box style={{ position: "absolute", right: 70, bottom: 4 }}>
                  <Ionicons name="diamond" size={30} color="blue" />
                </Box>
                <Box style={{ position: "absolute", right: -2, bottom: 7 }}>
                  <Entypo name="squared-plus" size={30} color="yellow" />
                </Box>
              </Box>
            </Box>
            {/* <BlurView
              style={styles.blurContainer}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            > */}
            <Card style={styles.boxProfile}>
              {/* <LinearGradient
                colors={["rgb(238,174,202)", "rgba(148,187,233,1)"]}
                style={styles.gradient}
              > */}
              <StyledView className="flex bottom-20 items-center">
                <Avatar size="xl">
                  <AvatarImage source={ImgLogo1} />
                </Avatar>
                {/* <Image source={ImgLogo1} className="w-24 h-24 rounded-full" /> */}
                <Text className="text-black text-[18px] font-bold">
                  Pani Adi Prinhandoko
                </Text>
              </StyledView>
              <StyledView
                className=" flex flex-col w-auto mx-8 bottom-8 rounded-lg"
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
              {/* <StyledView
                className=" my-4 flex flex-col w-auto mx-8 rounded-lg bg-none"
                // style={{ backgroundColor: colors.PURPLE }}
              >
              </StyledView> */}
              <StyledView className="p-4 mx-4">
                <Pressable
                  className="bg-white  border-spacing-4 p-1 w-full rounded-2xl"
                  style={{ backgroundColor: colors.YELLOW }}
                >
                  <View className="flex flex-row justify-center">
                    <Text className=" color-red text-[20px] font-bold ">
                      Start Game
                    </Text>
                  </View>
                </Pressable>
              </StyledView>
              {/* </LinearGradient> */}
            </Card>
            <Box display="flex" flexDirection="row" p={10} top={60} gap={15}>
              <Button
                // style={styles.CardButton}
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
            </Box>
            {/* </BlurView> */}
          </StyledView>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileUser;

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
  layar: {
    flex: 1,
    resizeMode: "cover",
    height: 900,
  },
  boxProfile: {
    // backgroundColor: "",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 30,
  },
  boxQuote: {
    backgroundColor: "",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 10,
  },
  CardButton: {
    borderRadius: 15,
    backgroundColor: "#e0e0e0",
    shadowColor: "#b5b5b5",
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowRadius: 15,
    shadowOpacity: 0.35,
    // box-shadow:  "-7px -7px 13px #b5b5b5",
    //   border-radius: "15px",
    // background: "#e0e0e0",
    // box-shadow:  -7px -7px 13px #b5b5b5,
    //              7px 7px 13px #ffffff,
  },
});
