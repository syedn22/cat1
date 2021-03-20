import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "monospace",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "dodgerblue",
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    justifyContent: "center",
  },
});
