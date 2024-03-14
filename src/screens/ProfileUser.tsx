import React from "react";

import ImgLogo1 from "../../assets/bapaksripal.png";
import diamond from "../../assets/diamond.png";
import cube from "../../assets/cube.png";

import { StyleSheet } from "react-native";
import {
  Box,
  Avatar,
  AvatarImage,
  Card,
  Pressable,
  View,
  Text,
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Image,
} from "@gluestack-ui/themed";
import Background from "../components/Background";
import dataAvatarModal from "../mocks/dataAvatarModal";
import { FontAwesome } from "@expo/vector-icons";
import D from "../../assets/diamond-2.png";
import { styled } from "nativewind";
import colors from "../utils/color";
const StyledPressable = styled(Pressable);

const ProfileUser = ({ navigation }: any) => {
  // #########
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const handleAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };
  // #########

  // Modal
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);
  const ref = React.useRef(null);
  // Modal

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
            position="relative"

            // onPress={() => navigation.navigate("Home")}
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
              borderRadius={"$full"}
              position="absolute"
              bg="#B5C0D0"
              borderStyle="solid"
              borderWidth={1}
              borderColor={"$black"}
              w={30}
              h={30}
              bottom={0}
              right={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FontAwesome name="pencil" size={20} color="black" />
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
            <Button
              bg="#F8BD00"
              rounded={"$lg"}
              onPress={() => navigation.navigate("in-game")}
            >
              <Text color="$white" fontWeight={"bold"} fontSize={18}>
                mulai quiz
              </Text>
            </Button>
          </Box>
        </Box>

        {/* #############MODAL############## make gini dlu besok gua bikin yang manggil nya misah  */}
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
