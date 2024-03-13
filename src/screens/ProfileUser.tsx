import React from "react";
import { styled } from "nativewind";
import colors from "../utils/color";

import bg from "../../assets/bg-2.jpeg";
import ImgLogo1 from "../../assets/bapaksripal.png";
import diamond from "../../assets/diamond.png";
import cube from "../../assets/cube.png";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";
import {
  AvatarFallbackText,
  Box,
  ButtonText,
  Card,
  Image,
  Pressable,
  View,
} from "@gluestack-ui/themed";
import { Button, Avatar, AvatarImage } from "@gluestack-ui/themed";
import Background from "../components/Background";
import { Text } from "@gluestack-ui/themed";

const StyledView = styled(View);

const ProfileUser = ({ navigation }: any) => {
  return (
    <Background>
      <View height="100%" display="flex" flexDirection="column">
        <Box
          width="100%"
          px={30}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          mt={40}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Image
              source={diamond}
              position="relative"
              zIndex={10}
              alt={"diamond"}
              width={25}
              height={25}
              objectFit={"contain"}
              marginRight={-10}
            />

            <Box
              width={50}
              height={20}
              bg="#ffffffce"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ButtonText color="$black" fontWeight={"bold"} size="sm">
                50
              </ButtonText>
            </Box>

            <Pressable
              px={10}
              bg="#0ACF83"
              borderWidth={1}
              borderColor={"#018b56"}
              borderRadius={"$md"}
            >
              <ButtonText
                shadowRadius={2}
                color="$white"
                fontWeight={"semibold"}
                size="md"
              >
                +
              </ButtonText>
            </Pressable>
          </Box>
        </Box>
        <Box
          width={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={80}
        >
          <Button
            bg={"$white"}
            borderRadius={"$full"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            h={95}
            w={95}
            onPress={() => navigation.navigate("Home")}
          >
            <Avatar shadowRadius={2} bg="$transparent">
              <AvatarImage
                source={ImgLogo1}
                alt={"avatar user"}
                w={80}
                h={80}
              />
            </Avatar>
          </Button>
          <Text fontWeight={"bold"} color="$black" mt={5}>
            Fani Adi Frihandoko
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={30}>
          <Image alt={"cube"} width={300} height={300} source={cube}></Image>
        </Box>
        <Box px={50} mt={30}>
          <Box w={"100%"} rounded={"$xl"} bg="#4F46E4" px={30} py={20}>
            <Button
              bg="#F8BD00"
              rounded={"$lg"}
              onPress={() => alert("kamu bangsat")}
            >
              <Text color="$white" fontWeight={"bold"} fontSize={18}>
                mulai quiz
              </Text>
            </Button>
          </Box>
        </Box>
        {/* <View display="flex" flexDirection="column" height="100%" bg="$red">
          <Box
            width="100%"
            px={30}
            position="absolute"
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            top={50}
            bgColor="$white"
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Image
                source={diamond}
                position="relative"
                zIndex={10}
                alt={"teka"}
                width={25}
                height={25}
                objectFit={"contain"}
                marginRight={-10}
              />

              <Box
                width={50}
                height={20}
                bg="#ffffffce"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ButtonText color="$black" fontWeight={"bold"}>
                  50
                </ButtonText>
              </Box>

              <Pressable
                px={10}
                bg="#0ACF83"
                borderWidth={1}
                borderColor={"#018b56"}
              >
                <ButtonText
                  shadowRadius={2}
                  color="$white"
                  fontWeight={"semibold"}
                  size="md"
                >
                  +
                </ButtonText>
              </Pressable>
            </Box>
          </Box>
          <Box
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              bg={"$white"}
              borderRadius={"$full"}
              h={150}
              w={150}
              onPress={() => navigation.navigate("Home")}
            >
              <Avatar>
                <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                <AvatarImage
                  source={ImgLogo1}
                  alt={"avatar user"}
                  w={140}
                  h={140}
                  objectFit="cover"
                />
              </Avatar>
            </Button>

            <Text size="xl" color="$white" marginTop={5}>
              Spideysheree
            </Text>

            <Button
              bg={"#0ACF83"}
              borderWidth={1}
              borderColor={"#018b56"}
              marginTop={100}
              marginBottom={-80}
            >
              <ButtonText textTransform="uppercase" size="xl">
                start game
              </ButtonText>
            </Button>
          </Box>
        </View> */}
      </View>
    </Background>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
