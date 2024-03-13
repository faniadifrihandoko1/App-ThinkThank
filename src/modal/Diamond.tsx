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
} from "@gluestack-ui/themed";
import React, { useState } from "react";

const Diamond = () => {
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
          <ModalHeader>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>//</Text>
          </ModalBody>
          <ModalFooter>
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
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Diamond;
