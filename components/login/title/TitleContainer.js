import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const TitleContainer = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.welcomeTitleText}>Hi Welcome Back !</Text>

      <Text style={styles.welcomeSubtitleText}>
        Hello again you have been missed!
      </Text>
    </View>
  );
};

export default TitleContainer;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 22,
  },

  welcomeTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },

  welcomeSubtitleText: {
    fontSize: 16,
    color: COLORS.black,
  },
});
