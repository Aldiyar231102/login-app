import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../Button";

const SignupButton = () => {
  return (
    <View>
      <Button title="Sign Up" filled style={styles.signupBtn} />
    </View>
  );
};

export default SignupButton;

const styles = StyleSheet.create({
  signupBtn: {
    marginTop: 18,
    marginBottom: 4,
  },
});
