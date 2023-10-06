import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import Email from "../components/signup/email/Email";
import SignupHeader from "../components/signup/header/SignupHeader";
import Number from "../components/signup/number/Number";
import Password from "../components/signup/password/Password";
import Subtitle from "../components/signup/signupSubtitle/Subtitle";
import SignupContainer from "../components/signup/signupContainer/SignupContainer";
import LoginContainer from "../components/signup/login/LoginContainer";
import SignupButton from "../components/signup/signupButton/SignupButton";
import Checkbox from "../components/signup/checkbox/Checkbox";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <SignupHeader />
        <Email />
        <Number />
        <Password />
        <Checkbox />
        <SignupButton />
        <Subtitle />
        <SignupContainer />
        <LoginContainer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  wrapper: {
    marginHorizontal: 22,
  },
});
