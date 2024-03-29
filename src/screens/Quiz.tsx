import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Background from "../components/Background";
import { Box, Text, Avatar, AvatarImage } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import IQuestion, { questions as dataQuiz } from "../mocks/dataQuiz";
import { TouchableWithoutFeedback } from "react-native";
import userStore from "../store/user";
import { io } from "socket.io-client";
import { IQuiz } from "../interface/data";
import { ActivityIndicator } from "react-native";
import { Card } from "@gluestack-ui/themed";

interface QuizData {
  options: string[];
  question: string;
  answer: string;
}

const socket = io("http://192.168.18.25:3000");
const Quiz = ({ navigation }: { navigation: any }) => {
  const [question, setQuestion] = React.useState<QuizData>({
    options: [],
    question: "",
    answer: "",
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [lengthQuestion, setLengthQuestion] = React.useState(10);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [timer, setTimer] = React.useState(15);
  const [answer, setAnswer] = React.useState("");
  const [point, setPoint] = React.useState(0);
  const avatar = userStore((state) => state.user.avatar);
  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false); // Setelah 5 detik, set isLoading menjadi false
    }, 8000);

    return () => clearTimeout(timerId); // Membersihkan timer jika komponen unmount
  }, []);

  React.useEffect(() => {
    socket.emit("dataPlayers", socket.id);
    socket.on("game", (data: any) => {
      console.log(`data question`, data);
      setQuestion({
        options: data.options,
        question: data.question,
        answer: data.answer,
      });
    });

    socket.on("countdownQuestions", (second) => {
      console.log(second);
      setTimer(second);
      console.log("anser:", answer);
      console.log("question answer:", question.answer);
      console.log("test", answer == question.answer);

      if (second === 0) {
        setSelectedAnswerIndex(null);
      }
    });

    console.log("point", point);
    socket.on("totalQuestions", (data) => {
      // console.log(data);
      setLengthQuestion(data);
    });

    socket.on("noMoreQuestions", () => {
      navigation.navigate("ranking");
    });
  }, []);

  const handleSubmit = (index: number, answer: string) => {
    setSelectedAnswerIndex(index);
    console.log(`jawaban`, answer);
    setAnswer(answer);
  };

  // if (isLoading) {
  //   return (
  //     <View style={[styles.loadingContainer, styles.horizontal]}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  return (
    <Background>
      <View
        style={{
          height: "100%",
          paddingHorizontal: 30,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          bg="black"
          height={"$4/5"}
          borderColor="white"
          borderWidth={2}
          borderRadius={"$xl"}
          backgroundColor="rgba(52, 52, 52, 0.8)"
          paddingVertical={"$7"}
          paddingHorizontal={"$5"}
        >
          {/* buat pialanya berada di kanan */}
          <Box justifyContent="flex-end" alignItems="flex-end">
            <Box
              display="flex"
              flexDirection="row"
              gap={4}
              justifyContent="center"
              alignItems="center"
            >
              <FontAwesome name="trophy" size={22} color="#FFE15D" />
              <Text color="white" fontSize={20} fontWeight="bold">
                {point}
              </Text>
            </Box>
          </Box>
          <Box justifyContent="center" alignItems="center" marginTop={20}>
            <Text color="#9BCF53" fontSize={25} fontWeight="bold">
              00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            marginTop={10}
            marginHorizontal={"$5"}
            paddingHorizontal={"$2"}
            paddingVertical={"$2"}
            borderColor="white"
            borderWidth={2}
            style={{
              height: "100%",
              maxHeight: "25%",
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Text
                color="white"
                fontSize={16}
                fontWeight="bold"
                textAlign="center"
              >
                {question.question}
              </Text>
            )}
          </Box>

          <Box
            bg="transparent"
            paddingVertical={"$2"}
            paddingHorizontal={"$4"}
            gap={15}
            mt={10}
          >
            {question.options.map((option, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    if (timer > 3) {
                      handleSubmit(index, option);
                    }
                  }}
                >
                  <Box
                    bgColor={
                      // selectedAnswerIndex === index
                      //   ? answer === option
                      //     ? "green"
                      //     : "red"
                      //   : "white"
                      selectedAnswerIndex === index
                        ? timer === 3 && timer > 0
                          ? answer === question.answer // Menggunakan === untuk perbandingan ketat
                            ? "green"
                            : "red"
                          : "white"
                        : "white"
                    }
                    width={"100%"}
                    borderColor={"gray"}
                    borderWidth={3}
                    height={55}
                    borderRadius={"$md"}
                    justifyContent="center"
                    paddingHorizontal={"$4"}
                  >
                    <Box width={"100%"}>
                      {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                      ) : (
                        <Text color="black" fontSize={16}>
                          {option}
                        </Text>
                      )}
                    </Box>
                    {/* Jika user memilih maka menampilkan avatar di tiap colom jawaban yang dia pilih */}
                    {selectedAnswerIndex === index && (
                      <Box
                        position="absolute"
                        display="flex"
                        flexDirection="row"
                        right={10}
                        gap={2}
                      >
                        <Avatar w={30} h={30}>
                          <AvatarImage alt="avatar" source={avatar} />
                        </Avatar>
                      </Box>
                    )}
                  </Box>
                </TouchableWithoutFeedback>
              );
            })}
          </Box>

          <Box
            width={"100%"}
            height={"$10"}
            mt={15}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={"$sm"} color="white" mb={3}>
              {lengthQuestion}/10 Pertanyaan
            </Text>
            <Progress.Bar
              progress={10 / lengthQuestion}
              width={280}
              color="green"
              animated
              borderColor="grey"
            />
          </Box>
        </Box>
      </View>
    </Background>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
