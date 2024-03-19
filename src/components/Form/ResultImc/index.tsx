import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(props:String) {
  return (
    <View>
      <Text>{props.resultImc}</Text>
      <Text>{props.messageResultImc}</Text>
    </View>
  )
}