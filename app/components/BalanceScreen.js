import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import AccountContext from "../context/AccountContext";

function BalanceScreen({ route }) {
  const account = React.useContext(AccountContext);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bank Name</Text>
      <Text style={styles.text}>{account.bankName}</Text>
      <Text style={styles.heading}>Balance Amount</Text>
      <Image
        source={require("../assets/rupees.png")}
        style={{ width: 70, height: 100 }}
      />
      <Text style={styles.text}>{account.balanceAmount}</Text>
    </View>
  );
}

export default BalanceScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
    marginBottom: 30,
  },
  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
