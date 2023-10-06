import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import COLORS from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Password = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);


  return (
    <View style={styles.passwordBlock}>
      <Text style={styles.passwordText}>Password</Text>

      <View style={styles.passwordInputBlock}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={isPasswordShown}
          style={styles.passwordInput}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={styles.eyeIconContainer}
        >
          {isPasswordShown == true ? (
            <Ionicons name="eye-off" size={24} style={styles.eyeOffIcon} />
          ) : (
            <Ionicons name="eye" style={styles.eyeIcon} size={24} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  passwordBlock: {
    marginBottom: 12,
  },

  passwordText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },

  passwordInputBlock: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },

  passwordInput: {
    width: "100%",
  },

  eyeIconContainer: {
    position: "absolute",
    right: 12,
  },

  eyeOffIcon: {
    color: COLORS.black,
  },

  eyeIcon: {
    color: COLORS.black,
  },
});
