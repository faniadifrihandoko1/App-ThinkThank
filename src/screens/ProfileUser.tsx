import React from "react";

import ImgLogo1 from "../../assets/bapaksripal.png";
import diamond from "../../assets/diamond.png";
import cube from "../../assets/cube.png";

import { StyleSheet } from "react-native";
import {
  Box,
  Avatar,
  AvatarImage,
  Pressable,
  View,
  Text,
  Button,
  ButtonText,
  Image,
} from "@gluestack-ui/themed";
import Background from "../components/Background";
import dataAvatarModal from "../mocks/dataAvatarModal";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import D from "../../assets/diamond-2.png";
import { styled } from "nativewind";
import colors from "../utils/color";
import AvatarModal from "../modal/AvatarModal";
import Diamond from "../modal/Diamond";
const StyledPressable = styled(Pressable);
// interface IProfileUser {
//   avatarId: ;
// }
const ProfileUser = ({ navigation }: any,) => {
  

 
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
          mt={-80}
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
              <ButtonText color="$black" textAlign="center" w={"100%"} px={4} fontWeight={"bold"} size="sm">
                9999
              </ButtonText>
            </Box>
            <Diamond />
          </Box>
        </Box>
        <Box
          width={"100%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={-60}
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
            position="relative"
          >
            <Avatar shadowRadius={2} bg="$transparent">
              <AvatarImage
                source={ImgLogo1}
                alt={"avatar user"}
                w={80}
                h={80}
              />
            </Avatar>
            <Pressable
              position="absolute"
              bg="#F8BD00"
              borderStyle="solid"
              borderWidth={1}
              borderColor={"$white"}
              w={30}
              h={30}
              bottom={0}
              right={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={"$full"}
            >
              <AvatarModal />
            </Pressable>
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
            <Pressable
              bg="#F8BD00"
              rounded={"$lg"}

              p={8}
              alignItems="center"

              onPress={() => navigation.navigate("room")}
            >
              <Text style={styles.buttonText}>mulai quiz</Text>
            </Pressable>
          </Box>
        </Box>
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
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "roboto",
  },
});
