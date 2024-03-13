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

// const StyledView = styled(View);

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
              onPress={() => setShowModal(true)}
              ref={ref}
            >
              <Text color="$white" fontWeight={"bold"} fontSize={18}>
                mulai quiz
              </Text>
            </Button>
          </Box>
        </Box>
        {/* #############MODAL############## make gini dlu besok gua bikin yang manggil nya misah  */}
        <Center h={300}>
          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            finalFocusRef={ref}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader display="flex" justifyContent="center" bottom={"$4"}>
                <Pressable
                  bg="#F8BD00"
                  w={"$32"}
                  alignItems="center"
                  justifyContent="center"
                  h={"$10"}
                  borderRadius="$xl"
                  position="relative"
                >
                  <Text>Avatar</Text>
                </Pressable>
              </ModalHeader>
              <ModalBody w={"$full"} h={"$56"} p={"$4"} display="flex">
                <Box
                  display="flex"
                  flexWrap="wrap"
                  flexDirection="row"
                  gap={"$2"}
                >
                  {dataAvatarModal.map((data) => (
                    <StyledPressable
                      className={`
              active:scale-110
            hover:bg-slate-950`}
                      key={data.id}
                      onPress={() => handleAvatar(data.id)}
                    >
                      <Card w={"$20"} rounded={"$xl"} key={data.id}>
                        <Image
                          w={"$12"}
                          h={"$12"}
                          rounded={"$full"}
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
                        <View
                          display="flex"
                          alignItems="center"
                          p={"$2"}
                          flexDirection="row"
                        >
                          <Text>{data.price}</Text>
                          <Image w={"$4"} h={"$4"} source={D} />
                        </View>
                      </Card>
                    </StyledPressable>
                  ))}
                </Box>
              </ModalBody>
              <ModalFooter
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outline"
                  size="sm"
                  action="secondary"
                  mr="$3"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Cancel</ButtonText>
                </Button>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: colors.YELLOW
                  }}
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>Apply</ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Center>

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
