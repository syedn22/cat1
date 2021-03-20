import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function SignUp() {
  return (
    <Screen>
      <View style={styles.page}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../images/signInLogo.png")}
          />
          <AppText>Sign In</AppText>
          <AppTextInput placeholder="userId" textContentType="emailAddress" />
          <AppTextInput placeholder="password" secureTextEntry={true} />
          <AppButton title="Sign In" />
        </View>
      </View>
    </Screen>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efeff5",
    margin: 10,
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    height: 400,
  },
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    top: -40,
    width: 90,
    height: 90,
  },
});
