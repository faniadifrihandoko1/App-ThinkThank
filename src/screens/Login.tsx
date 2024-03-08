import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg-2.jpeg";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Box, Pressable } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "815339831313-ivp6raajgv5g9funnemb1grbpjqd0ms4.apps.googleusercontent.com",
    iosClientId:
      "815339831313-8skf4jhriohjcs9g1icbtfc906i4nqkc.apps.googleusercontent.com",
    webClientId:
      "815339831313-fcigfegevn2scdknuep55khk8t4shj8s.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleSigninWithGoogle();
  }, [response]);

  async function handleSigninWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication?.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@user");
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
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
          <Text>{JSON.stringify(userInfo)}</Text>
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
            onPress={() => {
              promptAsync();
            }}
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
          <Pressable
            mt={5}
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
            onPress={logout}
            gap={5}
            borderRadius={"$xl"}
          >
            <Image
              alt="logo-google"
              // icon logout
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
              }}
              w={20}
              h={20}
            />
            <Text>Logout</Text>
          </Pressable>
        </Box>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
