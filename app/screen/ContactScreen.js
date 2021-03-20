import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import AppTextInput from "../components/AppTextInput";
import Contact from "../components/Contact";

const contacts = [
  { name: "Syed Mohammed", mobile: "+9175388 80996" },
  { name: "Sumaiya", mobile: "+9175898 80976" },
  { name: "Abba", mobile: "+9193444 27597" },
  { name: "Ammi", mobile: "+9198436 43089" },
];

function ContactScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="search contact"
        style={{
          backgroundColor: "white",
          fontSize: 24,
          borderWidth: 2,
          borderColor: "black",
          height: 70,
        }}
      />
      <View style={styles.contacts}>
        <Text style={styles.subHeading}>Contacts</Text>
        <ScrollView>
          {contacts.map((item) => (
            <Contact key={item.mobile} navigation={navigation} data={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  contacts: {
    margin: 10,
    width: 300,
    marginLeft: 10,
    borderRadius: 10,
    flex: 2,
  },
  subHeading: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
});
