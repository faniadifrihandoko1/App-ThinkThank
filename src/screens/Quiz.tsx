import { StyleSheet, View } from "react-native";
import React from "react";
import Background from "../components/Background";
import { Box, Text, Avatar, AvatarImage } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import IQuestion, { questions as dataQuiz } from "../mocks/dataQuiz";
import { TouchableWithoutFeedback } from "react-native";
import userStore from "../store/user";

const Quiz = ({ navigation }: { navigation: any }) => {
  const [question, setQuestion] = React.useState<IQuestion[]>([]);

  const avatar = userStore((state) => state.user.avatar);

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(5);
  const [selectAnswerIndex, setSelectAnswerIndex] = React.useState<
    number | null
  >(null);
  const [selectAnswer, setSelectAnswer] = React.useState("");
  const [timeRemaining, setTimeRemaining] = React.useState(10); // Waktu dalam detik

  const [timerRunning, setTimerRunning] = React.useState(false);
  const [points, setPoints] = React.useState(0);

  React.useEffect(() => {
    setQuestion(dataQuiz.slice(0, 10));
    setCurrentQuestionIndex(0);
    startTimer();
  }, []);

  React.useEffect(() => {
    if (timerRunning) {
      const timer = setTimeout(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          handleTimeUp();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining, timerRunning]);

  const handleTimeUp = () => {
    const correctAnswerIndex = currentQuestion?.correctAnswer;
    if (selectAnswer === correctAnswerIndex) {
      setPoints(points + 1000);
      // setTimerRunning(false); // Berhenti timer
    } else {
    }
    setTimeout(nextQuestion, 2000); // Pindah ke pertanyaan berikutnya
  };

  const startTimer = () => {
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimeRemaining(5);
  };

  const currentQuestion = question[currentQuestionIndex];

  const nextQuestion = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetTimer();
      setSelectAnswerIndex(null);
    } else if (currentQuestionIndex === 9) {
      navigation.navigate("ranking", { points });

      console.log("sudah diahkir quiz");
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const handleAnswer = (answer: number, option: string) => {
    setSelectAnswerIndex(answer);
    setSelectAnswer(option);
    if (answer === currentQuestion?.correctAnswer) {
      setPoints(points + 1000);
      // alert("jawaban benar");
      // nextQuestion();
    } else {
      // alert("jawaban salah");
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
              // Mengecek apakah opsi adalah jawaban yang benar
              const isCorrectAnswer = index === currentQuestion?.correctAnswer;

              // Mengecek apakah opsi dipilih oleh player
              const isSelectedAnswer = selectAnswerIndex === index;

              // console.log("isSelectedAnswer:", isSelectedAnswer);
              // console.log("isCorrectAnswer:", isCorrectAnswer);

              let BGCOLOR = "white";

              // Menetapkan warna latar belakang berdasarkan kondisi:
              if (timeRemaining === 0) {
                // Jika waktu habis
                if (isSelectedAnswer) {
                    // Jika opsi dipilih
                    BGCOLOR = selectAnswer === currentQuestion?.correctAnswer ? "green" : "red";
                } else if (isCorrectAnswer && !isSelectedAnswer) {
                    // Jika opsi tidak dipilih dan merupakan jawaban yang benar
                    BGCOLOR = "green";
                } else if (!isCorrectAnswer && isSelectedAnswer && index !== currentQuestion?.correctAnswer) {
                    // Jika opsi tidak dipilih dan bukan merupakan jawaban yang benar
                    BGCOLOR = "green";
                }
            }
              // bgColor={
              //   selectAnswerIndex === index
              //     ? timeRemaining === 0
              //       ? selectAnswer === currentQuestion?.correctAnswer
              //         ? "green"
              //         : "red"
              //       : "white"
              //     : "white"
              // }

              

              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    if (timeRemaining > 0) {
                      // Memeriksa apakah waktu masih berjalan sebelum menangani jawaban
                      handleAnswer(index, option);
                    }
                  }}
                >
                  {/* Kotak untuk opsi jawaban */}
                  <Box
                    bgColor={BGCOLOR}
                    borderColor={"gray"}
                    borderWidth={3}
                    height={55}
                    borderRadius={"$md"}
                    justifyContent="center"
                    paddingHorizontal={"$4"}
                    style={{ marginBottom: 10 }}
                  >
                    {/* Konten opsi jawaban */}
                    <Box width={"100%"}>
                      <Text color="black" fontSize={16}>
                        {option}
                      </Text>
                    </Box>

                    {/* Menampilkan avatar jika opsi dipilih oleh pengguna */}
                    {isSelectedAnswer && (
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

            {/* Jika user memilih maka menampilkan avatar di tiap colom jawaban yang dia pilih */}
            {/* {selectAnswerIndex === index && (
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
            )} */}
          </Box>

          <Box
            width={"100%"}
            height={"$10"}
            mt={15}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={"$sm"} color="white" mb={3}>
              {currentQuestionIndex + 1}/10 Pertanyaan
            </Text>
            <Progress.Bar
              progress={(currentQuestionIndex + 1) / 10}
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
