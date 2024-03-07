import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg-2.jpeg";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

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

  return (
    <>
      <ImageBackground source={bg} className="w-full h-full">
        <View className="flex items-center justify-between h-screen">
          <View className="mt-10 my-auto items-center">
            <Image
              className="w-52 h-40 filter drop-shadow-2xl fill-neutral-800000"
              source={logo}
            />
          </View>
          <View className="mb-14">
            <Pressable
              onPress={() => promptAsync()}
              className="flex flex-row items-center justify-center space-x-4 bg-white px-4 py-2 rounded-xl"
            >
              <Image
                className="w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              />
              <Text>Login With Google</Text>
            </Pressable>
            <Text className="text-center mt-3 color-white">
              by continue, you agree to our terms of service
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
