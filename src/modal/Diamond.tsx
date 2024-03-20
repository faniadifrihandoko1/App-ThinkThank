import {
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
  Text,
  CloseIcon,
  Pressable,
  Box,
  Card,
  View,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { moderateScale as ms } from "react-native-size-matters";

import dataModalDiamond, { IDiamond } from "../mocks/dataModalDiamond";
import { ListRenderItem, FlatList } from "react-native";
import { styled } from "nativewind";
import { Image } from "@gluestack-ui/themed";
const StyledPressable = styled(Pressable);

const Diamond = ({ navigation }: any) => {
  const [selectedDiamond, setSelectedDiamond] = React.useState(0);

  const handleDiamond = (diamondId: number) => {
    setSelectedDiamond(diamondId);
  };

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = React.useRef(null);

  const Item = ({ item }: { item: IDiamond }) => (
    <StyledPressable
      className={`
              active:scale-110
            hover:bg-slate-950
              m-2 `}
      onPress={() => handleDiamond(item.id)}
    >
      <Card
        w={"$24"}
        rounded={"$xl"}
        justifyContent="center"
        alignItems="center"
        width={"$24"}
        height={"$40"}
        bg="#F8BD00"
      >
        <Text py={4} color="$green" fontFamily="roboto" fontWeight="bold">
          {item.diamond}
        </Text>
        <Image
          w={"$12"}
          h={"$12"}
          source={{
            uri: item.image,
          }}
        />
        {selectedDiamond === item.id && (
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
        <View alignItems="center" justifyContent="center" py={4} w={"$full"}>
          <Text color="$red" fontSize={ms(12)}>
            Rp.{item.price}
          </Text>
        </View>
      </Card>
    </StyledPressable>
  );

  const renderItem: ListRenderItem<IDiamond> = ({ item }) => (
    <Item item={item} />
  );
  return (
    <>
      <Center h={300}>
        <Pressable
          px={10}
          bg="#0ACF83"
          borderWidth={1}
          borderColor={"#018b56"}
          borderRadius={"$md"}
          onPress={() => setShowModal(true)}
          ref={ref}
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
              mt={-20}
            >
              <Text>Diamond</Text>
            </Pressable>

            <FlatList
              data={dataModalDiamond}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ alignItems: "center" }}
              style={{ marginTop: ms(20) }}
              numColumns={3}
            />

            <ModalFooter
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                size="sm"
                action="negative"
                mr="$3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Save</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default Diamond;
