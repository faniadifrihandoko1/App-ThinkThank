import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>("");

  return (
    <View className="flex items-center flex-row mx-auto mt-10">
      <TextInput
        placeholder="masukan username"
        className="border border-black-200 p-2 rounded h-9"
        onChangeText={(text: string) => setUsername(text)}
      />
      <Pressable
        onPress={() => onSearch(username)}
        className="bg-blue-500 px-4 py-2 ml-2 rounded"
      >
        <Text className="text-white">search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
