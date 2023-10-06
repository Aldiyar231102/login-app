import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../constants/colors";

const Password = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <Text style={styles.passwordText}>Password</Text>

      <View style={styles.passwordInputContainer}>
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
            <Ionicons name="eye" size={24} style={styles.eyeIcon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  passwordContainer: {
    marginBottom: 12,
  },

  passwordText: {
    fontSize: 16,
    marginVertical: 8,
  },

  passwordInputContainer: {
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

  eyeIcon: {
    color: COLORS.black,
  },

  eyeOffIcon: {
    color: COLORS.black,
  },
});
