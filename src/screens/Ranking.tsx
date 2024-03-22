import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Background from "../components/Background";
import { AvatarImage, Box, Button, Card, HStack } from "@gluestack-ui/themed";
import juara2 from "../../assets/juara02.png";
import juara1 from "../../assets/juara01.png";
import juara3 from "../../assets/juara03.png";
import img1 from "../../assets/bapaksripal.png";
import { Avatar } from "@gluestack-ui/themed";
import { FontAwesome5 } from "@expo/vector-icons";
import lottie from "lottie-react-native";
import LottieView from "lottie-react-native";

const Ranking = ({ navigation }: { navigation: any }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const dummyData = [
    { name: "Anya", avatar: img1, score: 20000 },
    { name: "fani", avatar: img1, score: 1515 },
    { name: "adii", avatar: img1, score: 12000 },
    { name: "rayhan", avatar: img1, score: 10 },
    { name: "fadil", avatar: img1, score: 2000 },
  ];

  // Mendapatkan skor tertinggi dan terendah
  const maxScore = Math.max(...dummyData.map((item) => item.score));
  const minScore = Math.min(...dummyData.map((item) => item.score));

  const sortedData = [...dummyData].sort((a, b) => b.score - a.score);
  const ranking = sortedData.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));

  useEffect(
    () =>
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(),
    []
  );
  return (
    <Background>
      <View
        style={{
          height: "100%",
          paddingVertical: 60,
          alignItems: "center",
        }}
      >
        <Box>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Congrats,
          </Text>
          <Text
            style={{
              fontSize: 23,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            You get <Text style={{ color: "yellow" }}>1 Diamonds</Text>
          </Text>
        </Box>
        <Box
          style={{
            marginTop: 20,
            height: 330,
            width: 300,
            flexDirection: "row",
            top: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          {/* Looping melalui data dummy */}
          {ranking.slice(0, 3).map((item, index) => (
            <Box
              key={index}
              style={{
                width: "40%",
                height: "100%",
                backgroundColor: "transparent",
                flexDirection: "row",
                alignItems: "flex-end",
                marginLeft: index === 0 ? -15 : -30,
              }}
            >
              <Animated.View
                style={{
                  width: "100%",
                  height: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                  backgroundColor: "transparent",
                  overflow: "hidden",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 10,
                }}
              >
                <Box
                  mt={item.rank === 1 ? 10 : item.rank === 3 ? 80 : 40}
                  alignItems="center"
                  ml={20}
                >
                  {/* Avatar */}
                  <Avatar
                    shadowRadius={2}
                    bg="$transparent"
                    position="relative"
                  >
                    <AvatarImage
                      source={item.avatar}
                      alt={"avatar user"}
                      w={50}
                      h={50}
                      zIndex={-1}
                    />
                    {item.score === maxScore && (
                      <FontAwesome5
                        name="chess-queen"
                        size={24}
                        color="yellow"
                        top={-30}
                      />
                    )}
                  </Avatar>
                  {/* Nama Juara */}
                  <Text>{item.name}</Text>
                  {/* Skor */}
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                  >
                    {item.score}
                  </Text>
                </Box>
                {/* Gambar Juara */}
                <Image
                  source={
                    item.rank === 1 ? juara1 : item.rank === 2 ? juara2 : juara3
                  }
                  style={{ marginLeft: 20 }}
                />
              </Animated.View>
            </Box>
          ))}
        </Box>
        <Card w={"$80"} mt={-15} rounded={"$lg"} gap={"$1.5"}>
          {ranking.slice(3).map((item, index) => (
            <Card
              key={index}
              id={`juara-${index + 4}`}
              bg="$borderDark400"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              h={"$16"}
              borderColor="$white"
              borderWidth={2}
            >
              <Box flexDirection="row" alignItems="center" gap={"$1.5"}>
                <Avatar shadowRadius={2} bg="$transparent">
                  <AvatarImage
                    source={item.avatar}
                    alt={"avatar user"}
                    w={50}
                    h={50}
                  />
                </Avatar>
                <Text style={{ color: "white", fontWeight: "700" }}>
                  {item.name}
                </Text>
              </Box>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
                {item.score}
              </Text>
            </Card>
          ))}
        </Card>
        <Box
          mt={40}
          borderColor="$borderDark400"
          borderWidth={1}
          w={"$80"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          rounded={"$lg"}
          gap={15}
          paddingHorizontal={10}
        >
          <Button
            h={"$11"}
            bg="$red500"
            borderColor="$red900"
            borderWidth={1}
            w={"$1/2"}
            onPress={() => navigation.navigate("profile")}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Back to Home
            </Text>
          </Button>
          <Button 
            h={"$11"}
            bg="$success500"
            borderColor="$success900"
            borderWidth={1}
            w={"$1/2"}
            onPress={() => navigation.navigate("room")}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Play Again
            </Text>
          </Button>
        </Box>
      </View>
      <LottieView source={require ("../../assets/Animation - 1711008645448.json")} autoPlay loop style={{position: "absolute", backgroundColor: "transparent", top: 100, left: 0, right: 0, bottom: 370}}  />
      <LottieView source={require ("../../assets/Animation - 1711007960370.json")} autoPlay loop style={{position: "absolute", backgroundColor: "transparent", top: 100, left: 0, right: 0, bottom: 370}}  />
    </Background>
  );
};

export default Ranking;
