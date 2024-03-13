import React, { useState } from "react";
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
  Icon,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  CloseIcon,
  Image,
} from "@gluestack-ui/themed";

import { FontAwesome } from "@expo/vector-icons";   

import Av1 from "../../assets/premiumAvatar2.png";
import D from "../../assets/diamond-2.png";
import dataAvatarModal from "../mocks/dataAvatarModal";
import { styled } from "nativewind";
const StyledPressable = styled(Pressable);

const AvatarModal = () => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);

  const handleAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = React.useRef(null);
  return (
    <Center h={300}>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
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
            {/* <ModalCloseButton>
            </ModalCloseButton> */}
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
            <Box display="flex" flexWrap="wrap" flexDirection="row" gap={"$2"}>
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
                    {/* <Avatar w={'$16'} h={'$16'}>
                        <AvatarImage
                        source={{
                            uri: data.image,
                        }}
                    /> */}
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
              action="negative"
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
  );
};

export default AvatarModal;
