import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const Register = ({ navigation }) => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registrationText}>Don't have an account ? </Text>
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.registerButton}>Register</Text>
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },

  registrationText: {
    fontSize: 16,
    color: COLORS.black,
  },

  registerButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
