import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const EmailBlock = () => {
  return (
    <View style={styles.emailBlock}>
      <Text style={styles.emailText}>Email address</Text>

      <View style={styles.emailInputBlock}>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={COLORS.black}
          keyboardType="email-address"
          style={styles.emailInput}
        />
      </View>
    </View>
  );
};

export default EmailBlock;

const styles = StyleSheet.create({
  emailBlock: {
    marginBottom: 12,
  },

  emailText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },

  emailInputBlock: {
    width: "100%",
    height: 48,
    bordeColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },

  emailInput: {
    width: "100%",
  },
});
