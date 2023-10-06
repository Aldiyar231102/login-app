import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ExpoCheckbox  from "expo-checkbox";
import COLORS from "../../../constants/colors";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <ExpoCheckbox 
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? COLORS.primary : undefined}
      />

      <Text>I agree to the terms and conditions</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },

  checkbox: {
    marginRight: 8,
  },
});
