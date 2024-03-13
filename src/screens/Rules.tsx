import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import bg from '../assets/bg-rules.jpg'
import { KeyboardAvoidingView } from "react-native";



const Rules = ({navigation}: any) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ImageBackground source={bg} className="w-full h-full">

        <Text>Rules</Text>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Rules;

const styles = StyleSheet.create({});
