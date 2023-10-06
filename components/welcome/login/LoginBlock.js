import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const LoginBlock = ({ navigation }) => {
  return (
    <View style={styles.loginBlock}>
      <Text style={styles.loginText}>Already have an account?</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginBtn}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginBlock;

const styles = StyleSheet.create({
  loginBlock: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },

  loginText: {
    fontSize: 16,
    color: COLORS.white,
  },

  loginBtn: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
