import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ServiceScreen(props) {
  return (
    <View>
      <Text>Services</Text>
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="train" size={50} color="black" />
          <Text>Train</Text>
        </View>
       
      </View>
    </View>
  );
}

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 300,
    margin: 10,
    backgroundColor: "lightgrey",
    marginLeft: 10,
    borderRadius: 10,
  },
  contacts: {
    width: 340,
    height: 400,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  subHeading: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
