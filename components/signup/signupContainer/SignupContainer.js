import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const SignupContainer = () => {
  return (
    <View style={styles.signupContainer}>
      <TouchableOpacity style={styles.signupFacebook}>
        <Image
          source={require('../../../assets/facebook.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupGoogle}>
        <Image
          source={require("../../../assets/google.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupContainer;

const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  signupFacebook: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },

  signupGoogle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },

  logo: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
});
