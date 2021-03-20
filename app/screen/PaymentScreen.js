import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../components/AppTextInput";
import AccountContext from "../context/AccountContext";

function PaymentScreen({ userAccount, navigation }) {
  const [amount, setAmount] = useState(0);
  const [account, setaccount] = React.useContext(AccountContext);

  const checkForBalance = () => {
    if (amount > account.balanceAmount)
      Alert.alert("Payment Is Not Successful.");
    else {
      account.balanceAmount -= amount;
      Alert.alert("Payment Is Not Successful.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter The Amount</Text>
      <Image
        source={require("../assets/rupees.png")}
        style={{ width: 70, height: 100 }}
      />

      <AppTextInput
        keyboardType="number-pad"
        onChangeText={(e) => setAmount(Number(e))}
      />
      <TouchableOpacity onPress={checkForBalance}>
        <MaterialCommunityIcons
          name="checkbox-marked-circle"
          size={70}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BarcodeScreen")}>
        <MaterialCommunityIcons name="qrcode" size={70} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    // width: 350,
    // height: 200,
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
    marginBottom: 30,
  },
});
