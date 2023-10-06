import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const Number = () => {
  return (
    <View style={styles.numberBlock}>
      <Text style={styles.numberText}>Mobile Number</Text>

      <View style={styles.numberInputBlock}>
        <TextInput
          placeholder="+91"
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={styles.numberCodeInput}
        />

        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor={COLORS.black}
          keyboardType="numeric"
          style={styles.numberInput}
        />
      </View>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({
  numberBlock: {
    marginBottom: 12,
  },

  numberText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },

  numberInputBlock: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },

  numberCodeInput: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: COLORS.grey,
    height: "100%",
  },

  numberInput: {
    width: "80%",
  },
});
