import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";


export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppButton
        title="Matrix Operation"
        onPress={() => navigation.navigate("matrixscreen")}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#333",
  },
});
