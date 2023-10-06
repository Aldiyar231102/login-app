import { View, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import TitleContainer from "../components/login/title/TitleContainer";
import Email from "../components/login/email/Email";
import Password from "../components/login/password/Password";
import CheckBoxContainer from "../components/login/checkbox/CheckboxContainer";
import LoginButton from "../components/login/button/LoginButton";
import LoginWith from "../components/login/loginWith/LoginWith";
import SocialNetworks from "../components/login/socialNetworks/SocialNetworks";
import Register from "../components/login/register/Register";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TitleContainer />
        <Email />
        <Password />
        <CheckBoxContainer />
        <LoginButton />
        <LoginWith />
        <SocialNetworks />
        <Register navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  wrapper: {
    flex: 1,
    marginHorizontal: 22,
  },
});
