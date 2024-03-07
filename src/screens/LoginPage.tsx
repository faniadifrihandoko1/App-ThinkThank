import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Image, Pressable } from "@gluestack-ui/themed";
import colors from "../utils/color";
import logo from "../../assets/logo.png";
import { Text } from "@gluestack-ui/themed";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
WebBrowser.maybeCompleteAuthSession();
const LoginPage = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "815339831313-ivp6raajgv5g9funnemb1grbpjqd0ms4.apps.googleusercontent.com",
    iosClientId:
      "815339831313-8skf4jhriohjcs9g1icbtfc906i4nqkc.apps.googleusercontent.com",
    webClientId:
      "815339831313-fcigfegevn2scdknuep55khk8t4shj8s.apps.googleusercontent.com",
  });
  return (
    <View
      style={{
        backgroundColor: colors.blue,
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box justifyContent="center" mt="$40" my={"auto"} alignItems="center">
        <Image source={logo} alt="logo" width={250} height={150} />
      </Box>
      <Box mt={"$56"}>
        {/* url icon google */}

        <Pressable
          display="flex"
          flexDirection="row"
          px={"$4"}
          py="$2"
          rounded="$md"
          style={{ gap: 10 }}
          bg="$white"
          alignContent="center"
          justifyContent="center"
          onPress={() => {
            promptAsync();
          }}
        >
          <Image
            alt="google"
            width={20}
            height={20}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
            }}
          />
          <Text>Continue with Google Account</Text>
        </Pressable>
        <Text color="$white" mt="$2" size="sm">
          by continue, you agree to our terms of service
        </Text>
      </Box>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
