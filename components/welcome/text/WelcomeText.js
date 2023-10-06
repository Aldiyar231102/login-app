import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const WelcomeText = () => {
  return (
    <View>
      <Text style={styles.titleOne}>Let's Get</Text>

      <Text style={styles.titleTwo}>Started</Text>
      <Text style={styles.textBlockOne}>
        Connect with each other with chatting
      </Text>

      <Text style={styles.textBlockTwo}>
        Calling, Enjoe Safe and private texting
      </Text>
    </View>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  titleOne: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.white,
  },

  titleTwo: {
    fontSize: 46,
    fontWeight: "bold",
    color: COLORS.white,
  },

  textBlockOne: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },

  textBlockTwo: {
    fontSize: 16,
    color: COLORS.white,
  },
});
