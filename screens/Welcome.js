import { StyleSheet, View} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Images from "../components/welcome/images/Images";
import WelcomeText from "../components/welcome/text/WelcomeText";
import JoinButton from "../components/welcome/button/JoinButton";
import LoginBlock from "../components/welcome/login/LoginBlock";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient style={styles.linearGradient} colors={[COLORS.secondary, COLORS.primary]} >
      <View style={styles.container}>
        <Images />
        <View style={styles.welcomeTextContainer}>
          <WelcomeText />
          <JoinButton navigation={navigation} />
          <LoginBlock navigation={navigation} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  welcomeTextContainer: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },

  welcomeBlock: {
    marginVertical: 22,
  },
});
