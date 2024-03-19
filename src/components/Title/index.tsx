import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(props:String) {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color:"red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
})