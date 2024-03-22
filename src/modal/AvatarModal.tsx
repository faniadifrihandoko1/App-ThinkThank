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

import D from "../../assets/diamond-2.png";
import dataAvatarModal, { IAvatar } from "../mocks/dataAvatarModal";
import { styled } from "nativewind";
import { ListRenderItem, FlatList } from "react-native";
import { moderateScale as ms } from "react-native-size-matters";
import userStore from "../store/user";

const StyledPressable = styled(Pressable);

const AvatarModal = () => {
  const { setDiamond, setAvatar, user } = userStore((state) => state);
  // const setAvatar = userStore((state) => state.setAvatar);
  const [selectedAvatar, setSelectedAvatar] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [avatarPrice, setAvatarPrice] = React.useState(0);

  const handleAvatar = (avatarId: number, image: string, price: number) => {
    setSelectedAvatar(avatarId);
    selectedImage === image ? setSelectedImage("") : setSelectedImage(image);
    setAvatarPrice(price);
  };

  const handleSave = () => {
    if (avatarPrice) {
      if (user.diamond >= avatarPrice) {
        setDiamond(user.diamond - avatarPrice);
        setAvatar(selectedImage);
        setShowModal(false);
      } else {
        alert("Diamond tidak mencukupi");
      }
    } else {
      setAvatar(selectedImage);
      setShowModal(false);
    }
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
      onPress={() => handleAvatar(item.id, item.image, item.price || 0)}
    >
      <Card
        w={"$20"}
        rounded={"$lg"}
        width={"$24"}
        height={"$32"}
        borderWidth={2}
        borderColor="white"
        backgroundColor="rgba(52, 52, 52, 0.9)"
      >
        <Image
          w={"$16"}
          h={"$16"}
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
        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={"$2"}
          flexDirection="row"
        >
          <Text color="$white" fontWeight="bold">
            {item.price === 0 ? "Free" : item.price}
          </Text>
          {item.id > 3 && <Image w={"$4"} h={"$4"} source={D} />}
        </View>
      </Card>
    </StyledPressable>
  );

  const renderItem: ListRenderItem<IAvatar> = ({ item }) => (
    <Item item={item} />
  );

  return (
    <Center h={300}>
      <Pressable onPress={() => setShowModal(true)} ref={ref}>
        <FontAwesome name="pencil" size={20} color="white" />
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
          backgroundColor="rgba(52, 52, 52, 0.9)"
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
              w={130}
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              w={130}
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                handleSave();
              }}
            >
              <ButtonText>$Buy</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AvatarModal;
