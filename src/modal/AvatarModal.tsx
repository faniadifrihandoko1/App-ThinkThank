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
import dataAvatarModal, { IAvatar }  from "../mocks/dataAvatarModal";
import { styled } from "nativewind";
import { ListRenderItem, FlatList } from "react-native";
import { moderateScale as ms } from "react-native-size-matters";

const StyledPressable = styled(Pressable);

const AvatarModal = () => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);

  const handleAvatar = (avatarId: number) => {
    setSelectedAvatar(avatarId);
  };

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = React.useRef(null);

  const Item = ({ item }: { item: IAvatar }) => (
    <StyledPressable
      className={`
    active:scale-110
    hover:bg-slate-950
      m-2
    `}
      onPress={() => handleAvatar(item.id)}
    >
      <Card w={"$20"} rounded={"$lg"} key={item.id}>
        <Image
          w={"$12"}
          h={"$12"}
          rounded={"$full"}
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
        <View display="flex" alignItems="center" p={"$2"} flexDirection="row">
          <Text>{item.price}</Text>
          <Image w={"$4"} h={"$4"} source={D} />
        </View>
      </Card>
    </StyledPressable>
  );

  const renderItem: ListRenderItem<IAvatar> = ({ item }) => <Item item={item} />;

  return (
    <Center h={300}>
      <Pressable onPress={() => setShowModal(true)} ref={ref}>
        <FontAwesome name="pencil" size={20} color="black" />
      </Pressable>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent
          w={"$full"}
          maxHeight="60%"
          alignItems="center"
          overflow="visible"
        >
          <Pressable
            bg="#F8BD00"
            w={"$32"}
            alignItems="center"
            justifyContent="center"
            h={"$10"}
            borderRadius="$xl"
            marginTop={-20}
          >
            <Text>Avatar</Text>
          </Pressable>

          <FlatList
            data={dataAvatarModal}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ alignItems: "center" }}
            style={{ marginTop: ms(20) }}
            numColumns={3}
          />
          <ModalFooter
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              w={"100%"}
            >
              <Button
                size="sm"
                action="negative"
                // w={"50%"}
                mr="$3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                  // w={"50%"}
                size="sm"
                action="positive"
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
