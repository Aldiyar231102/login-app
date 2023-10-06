import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const LoginWith = () => {
  return (
    <View style={styles.loginWithContainer}>
      <View style={styles.line} />
      <Text style={styles.loginWithText}>Or Login with</Text>
      <View style={styles.line} />
    </View>
  );
};

export default LoginWith;

const styles = StyleSheet.create({
  loginWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  loginWithText: {
    fontSize: 14,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
});
