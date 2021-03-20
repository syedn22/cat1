import React, { useContext, createContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AppButton from "../components/AppButton";
import Contact from "../components/Contact";
import BalanceScreen from "../components/BalanceScreen";
import PaymentScreen from "../screen/PaymentScreen";
import TransactionScreen from "../screen/TransactionScreen";
import ContactScreen from "../screen/ContactScreen";
import BarcodeScreen from "../screen/BarcodeScreen";
import AccountContext from "../context/AccountContext";

const Stack = createStackNavigator();

const account = {
  name: "Syed Mohammed",
  mobile: "+9175388 80996",
  balanceAmount: 40000,
  bankName: "ABCD bank",
};

const contacts = [
  { name: "Syed Mohammed", mobile: "+9175388 80996" },
  { name: "Sumaiya", mobile: "+9175898 80976" },
  { name: "Abba", mobile: "+9193444 27597" },
  { name: "Ammi", mobile: "+9198436 43089" },
];

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Digital Payment</Text>
        <View style={{ flexDirection: "row" }}>
          <AppButton
            title="Balance"
            onPress={() => navigation.navigate("BalanceScreen", { account })}
          ></AppButton>
          <AppButton
            title="Transactions"
            onPress={() => navigation.navigate("TransactionScreen")}
          ></AppButton>
        </View>
      </View>

      <View style={styles.contacts}>
        <Text style={styles.subHeading}>Contacts</Text>
        <ScrollView>
          {contacts.map((item) => (
            <Contact key={item.mobile} navigation={navigation} data={item} />
          ))}
        </ScrollView>
      </View>
      <AppButton
        title="+ New Payment"
        onPress={() => navigation.navigate("ContactScreen")}
      />
    </View>
  );
}

function HomeScreen(props) {
  return (
    <AccountContext.Provider value={account}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="BarcodeScreen" component={BarcodeScreen} />
      </Stack.Navigator>
    </AccountContext.Provider>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    margin: 10,
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contacts: {
    margin: 10,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 10,
    borderRadius: 10,
    flex: 2,
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
