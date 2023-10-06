import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/colors";

const SocialNetworks = () => {
  return (
    <View style={styles.socialNetworksContainer}>
      <TouchableOpacity style={styles.facebookContainer}>
        <Image
          source={require("../../../assets/facebook.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleContainer}>
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

export default SocialNetworks;

const styles = StyleSheet.create({
  socialNetworksContainer: {
    flexDirection: "row",
  },

  facebookContainer: {
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

  googleContainer: {
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
});
