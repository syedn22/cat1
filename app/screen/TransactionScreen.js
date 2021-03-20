import React from "react";
import { View, StyleSheet, Text } from "react-native";

const transactions = [
  { name: "Sumaiya", mobile: "+9175898 80976", amount: 234 },
  { name: "Abba", mobile: "+9193444 27597", amount: 16785 },
  { name: "Ammi", mobile: "+9198436 43089", amount: 3542 },
  { name: "Arun", mobile: "+9198436 43089", amount: 3000 },
  { name: "JagaPradeep", mobile: "+9198436 43089", amount: 3 },
  { name: "Sumaiya", mobile: "+9198436 43089", amount: 500 },
];

function TransactionScreen(props) {
  return (
    <View>
      {transactions.map((item) => (
        <View style={styles.transactionItem} key={item.amount}>
          <View style={{ marginRight: 50 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>{item.mobile}</Text>
          </View>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      ))}
    </View>
  );
}

export default TransactionScreen;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    color: "dodgerblue",
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});
