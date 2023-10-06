import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const Email = () => {
  return (
    <View style={styles.emailContainer}>
      <Text style={styles.emailText}>Email address</Text>

      <View style={styles.emailInputContainer}>
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

export default Email;

const styles = StyleSheet.create({
  emailContainer: {
    marginBottom: 12,
  },

  emailText: {
    fontSize: 16,
    marginVertical: 8,
  },

  emailInputContainer: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
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
