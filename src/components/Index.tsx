import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { data } from "../interface/data";
import User from "./User";
import SearchBox from "./SearchBox";



const Index = () => {
  const [data, setData] = useState<data>();
  const search = async (searchTerm: string) => {
    if (searchTerm == "") {
      alert("masukan username");
      return;
    }
    const response = await axios.get(
      `https://api.github.com/users/${searchTerm}`
    );
    console.log(response.data);
    setData(response.data);
  };
  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen">
        <SearchBox onSearch={search} />
        {data && (
          <User
            src={data.avatar_url}
            username={data.login}
            key={data.followers}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

