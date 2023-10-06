import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../Button";

const LoginButton = () => {
  return (
    <View>
      <Button title="Login" filled style={styles.loginButton} />
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 18,
    marginBottom: 4,
  },
});
