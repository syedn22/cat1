import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";

export default function AppTextInput({ style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[{ color: "white", fontSize: 24, fontWeight: "bold" }]}
       
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 5,
    margin: 10,
    padding: 10,
    width: 340,
    justifyContent: "center",
    height: 100,
  },
});
