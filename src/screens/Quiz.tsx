import { ProgressBarAndroidBase, StyleSheet, View } from "react-native";
import React from "react";
import Background from "../components/Background";
import { Box, Button, Card, Text } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import IQuestion, { questions as dataQuiz } from "../mocks/dataQuiz";
import { TouchableWithoutFeedback } from "react-native";

const Quiz = () => {
  const [question, setQuestion] = React.useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selecetAnswer, setSelectAnswer] = React.useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = React.useState(18); // Waktu dalam detik
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [points, setPoints] = React.useState(0);

  React.useEffect(() => {
    setQuestion(dataQuiz);
    setCurrentQuestionIndex(0);
    startTimer();
  }, []);

  React.useEffect(() => {
    if (timerRunning) {
      const timer = setTimeout(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          nextQuestion();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining, timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimeRemaining(18);
  };

  const currentQuestion = question[currentQuestionIndex];

  const nextQuestion = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetTimer();
      setSelectAnswer(null);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const handleAnswer = (answer: number) => {
    setSelectAnswer(answer);
    if (answer === currentQuestion?.correctAnswer) {
      setPoints(points + 1000);
      alert("jawaban benar");
      nextQuestion();
    } else {
      alert("jawaban salah");
    }
  };

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
          // maxHeight={"$4/6"}
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
                {points}
              </Text>
            </Box>
          </Box>
          <Box justifyContent="center" alignItems="center" marginTop={20}>
            <Text color="#9BCF53" fontSize={25} fontWeight="bold">
              00:{timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}
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
            <Text
              color="white"
              fontSize={16}
              fontWeight="bold"
              textAlign="center"
            >
              {currentQuestion?.question}
            </Text>
          </Box>

          <Box
            bg="transparent"
            paddingVertical={"$2"}
            paddingHorizontal={"$4"}
            gap={15}
            mt={10}
          >
            {currentQuestion?.options.map((option, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleAnswer(index)}
                >
                  <Box
                    borderColor="$black"
                    bgColor="white"
                    borderWidth={2}
                    height={55}
                    borderRadius={"$md"}
                    justifyContent="center"
                    paddingHorizontal={"$4"}
                  >
                    <Box width={"100%"}>
                      <Text color="black" fontSize={16}>
                        {option}
                      </Text>
                    </Box>
                    {/* Jika user memilih maka menampilkan avatar di tiap colom jawaban yang dia pilih */}
                    {/* <Box
                    position="absolute"
                    display="flex"
                    flexDirection="row"
                    right={10}
                    gap={2}
                    >
                    <Card rounded={"$full"} width={"$3"} height={"$3"}></Card>
                    <Card rounded={"$full"} width={"$3"} height={"$3"}></Card>
                  </Box> */}
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
              {currentQuestionIndex + 1}/20 Pertanyaan
            </Text>
            <Progress.Bar
              progress={(currentQuestionIndex + 1) / question.length}
              width={280}
              color="green"
              animated
              borderColor="grey"
            />
          </Box>
          {/* <Button
            style={{ height: "5%" }}
            onPress={() => nextQuestion()}
          ></Button> */}
        </Box>
      </View>
    </Background>
  );
};

export default Quiz;

const styles = StyleSheet.create({});