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
  View,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import {
  Box,
  Card,
  Image,
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed";

const StyledView = styled(View);

const InGame = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ImageBackground source={bg} style={styles.background}>
          <StyledView>
            <Box
              display="flex"
              padding={10}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width={"100%"}
              top={150}
              
            >
              <Text className="text-white font-bold text-[20px] ml-10 ">
                Quest 1
              </Text>
              <Text
                className="border-2 text-[18px] mr-10 p-2 text-center border-white  text-black rounded  bg-none"
                // placeholder="make a room"
              >
                00 : 15
              </Text>
            </Box>
            <Card marginBottom={200} top={200}>
              <Box>
                <Text style={styles.texthHeader}>QUESTION 1 OF 15</Text>
                <Text style={styles.text}>
                  Jika kamu memasukkan tiga koin ke dalam kotak kosong, kemudian
                  mengambil dua koin lagi, berapa banyak koin yang kamu miliki?
                  :
                </Text>
                <Box>
                  <ButtonGroup>
                    <Button style={styles.button}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        w={"100%"}
                        justifyContent="space-between"
                      >
                        <Box display="flex">
                          <Text>1</Text>
                        </Box>
                        <Box display="flex">
                          <Text></Text>
                        </Box>
                      </Box>
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button style={styles.button}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        w={"100%"}
                        justifyContent="space-between"
                      >
                        <Box display="flex">
                          <Text>2</Text>
                        </Box>
                        <Box display="flex">
                          <Text></Text>
                        </Box>
                      </Box>
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button style={styles.button}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        w={"100%"}
                        justifyContent="space-between"
                      >
                        <Box display="flex">
                          <Text>3</Text>
                        </Box>
                        <Box display="flex">
                          <Text></Text>
                        </Box>
                      </Box>
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button style={styles.button}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        w={"100%"}
                        justifyContent="space-between"
                      >
                        <Box display="flex">
                          <Text>4</Text>
                        </Box>
                        <Box display="flex">
                          <Text></Text>
                        </Box>
                      </Box>
                    </Button>
                  </ButtonGroup>
                </Box>
                <Pressable style={styles.buttonSubmit}>
                  <ImageBackground source={bg} style={styles.background}>
                    <Text className="text-white font-bold text-[20px] text-center rounded-md">Submit</Text>
                  </ImageBackground>
                </Pressable>
              </Box>
            </Card>
          </StyledView>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InGame;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    // borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    display: "flex",
    height: 60,
  },
  buttonSubmit: {
    backgroundColor: "#F2F2F2",
    // borderRadius: 10,
    width: "100%",
    height: 40,
    marginBottom: 40,
    display: "flex",
  },
  buttonHovered: {
    backgroundColor: "gray",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  texthHeader: {
    // fontFamily: "roboto",
    // fontWeight: "bold",
    color: "black",
    textAlign: "left",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    marginBottom: 20,
  },
  layar: {
    flex: 1,
    resizeMode: "cover",
    height: 900,
  },
});
