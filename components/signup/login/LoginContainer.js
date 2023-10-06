import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const LoginContainer = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Already have an account</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginBtn}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },

  loginText: {
    fontSize: 16,
    color: COLORS.black,
  },

  loginBtn: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
