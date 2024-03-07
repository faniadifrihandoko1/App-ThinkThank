import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const ProfileUser = (props: Props) => {
  return (
    <>
      <StyledView
        className="flex-1 items-center h-screen justify-center"
        style={{ backgroundColor: Colors.BLUE }}
      >
        <StyledView>
          <Pressable
            className="bg-white mb-4 border-spacing-4 p-3 w-full rounded-2xl"
            style={{ backgroundColor: Colors.YELLOW }}
          >
            <TextInput
              className="border-2 my-3 border-black text-white rounded-2xl p-2 w-full"
              style={{ backgroundColor: Colors.PURPLE_SOFT }}
              placeholder="make a room"
            />
          </Pressable>
        </StyledView>
        <StyledView className="rounded-t-3xl w-full -bottom-7 bg-slate-300 ">
          <StyledView className="flex -top-10 items-center">
            <Image source={ImgLogo1} className="w-24 h-24 rounded-full" />
            <Text className="text-black text-[18px] font-bold">
              Pani Adi Prinhandoko
            </Text>
          </StyledView>
          <StyledView
            className=" flex flex-col w-auto mx-8  rounded-lg"
            style={{ backgroundColor: Colors.MAROON }}
          >
            {/* <StyledView className="flex flex-row bg-none">
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </StyledView> */}
            <StyledView className=" flex flex-row justify-between p-4">
              <Text className="font-bold  align-justify w-1/2 text-[20px] text-white">
                ASAH OTAK ANDA DENGAN QUIZ THINK THANK
              </Text>
              <StyledView className="flex   items-center">
                <Image source={Imgquiz} className=" w-32 h-32 rounded" />
              </StyledView>
            </StyledView>
            {/* <StyledView className="flex flex-row bg-none">
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </StyledView> */}
          </StyledView>
          <StyledView
            className=" my-4 flex flex-col w-auto mx-8 rounded-lg"
            style={{ backgroundColor: Colors.PURPLE }}
          >
            <StyledView className="p-4">
              <TextInput
                className="border-2 mb-3 border-black text-white rounded-2xl p-2 w-full"
                style={{ backgroundColor: Colors.PURPLE_SOFT }}
                placeholder="Enter name your room"
              />
              <Pressable
                className="bg-white mb-4 border-spacing-4 p-1 w-full rounded-2xl"
                style={{ backgroundColor: Colors.YELLOW }}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Buat Room
                  </Text>
                </View>
              </Pressable>
              <Pressable
                className="bg-white  border-spacing-4 p-1 w-full rounded-2xl"
                style={{ backgroundColor: Colors.YELLOW }}
              >
                <View className="flex flex-row justify-center">
                  <Text className=" color-red text-[20px] font-bold ">
                    Masuk room
                  </Text>
                </View>
              </Pressable>
            </StyledView>
          </StyledView>
          <StyledView className="flex flex-between justify-around flex-row p-4 ">
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={Colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: Colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
              onPress={() => navigation.navigate("Home")}
            >
              <FontAwesome5 name="user-alt" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={Colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: Colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <FontAwesome5 name="medal" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={Colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: Colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <FontAwesome6 name="shop" size={24} color="white" />
            </Button>
            <Button
              // size="md"
              width={70}
              height={60}
              borderRadius={12}
              backgroundColor={Colors.DONGKER}
              $hover-backgroundColor={"$backgroundLight800"}
              // style={{  backgroundColor: Colors.DONGKER }}
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              className="p-4 rounded-lg cursor-pointer"
            >
              <MaterialCommunityIcons
                name="comment-question"
                size={24}
                color="white"
              />
            </Button>
          </StyledView>
        </StyledView>
      </StyledView>
    </>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({});
