import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { Box, Image, Pressable } from "@gluestack-ui/themed";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg-2.jpeg";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
const LoginPage = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        signIn;
      }
    } catch (err) {
      console.error("OAuth error", err);

    } 

  }, []);

  return (
    <ImageBackground source={bg}  style={styles.background}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",

          height: "100%",
        }} 
      >
        <Box
          justifyContent="center"
          alignItems="center"
          width={"$full"}
          height={"$56"}
        >
          <Image w={"$56"} h={"$40"} alt="logo" source={logo} />
        </Box>
        <Box
          width={"$full"}
          justifyContent="center"
          alignItems="center"
          bottom={30}
          position="absolute"
        >
          <Pressable
            bg="white"
            display="flex"
            flexDirection="row"
            px={"$4"}
            py={"$2"}
            rounded={"$md"}
            justifyContent="center"
            alignItems="center"
            width={"$2/3"}
            height={"$10"}
            onPress={onPress}
            gap={5}
            borderRadius={"$xl"}
          >
            <Image
              alt="logo-google"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
              }}
              w={20}
              h={20}
            />
            <Text>Continue login with google</Text>
          </Pressable>
        </Box>
      </View>
    </ImageBackground>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
