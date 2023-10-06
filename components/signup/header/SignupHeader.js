import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const SignupHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>Connect with your friend today!</Text>
    </View>
  );
};

export default SignupHeader;

const styles = StyleSheet.create({
  header: {
    marginVertical: 22,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
});
