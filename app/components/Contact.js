import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Contact({ navigation, data }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: 250,
          height: 70,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/s.png")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={{ marginLeft: 30 }}>
          <Text style={{ alignSelf: "flex-start" }}>{data.name}</Text>
          <Text style={{ alignSelf: "center" }}>{data.mobile}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Contact;
