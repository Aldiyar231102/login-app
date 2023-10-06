import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Images = () => {
  return (
    <View>
      <Image source={require("../../../assets/hero1.jpg")} style={styles.imageOne} />
      <Image
        source={require("../../../assets/hero3.jpg")}
        style={styles.imageThree}
      />
      <Image
        source={require("../../../assets/hero3.jpg")}
        style={styles.imageThreeCopy}
      />
      <Image source={require("../../../assets/hero2.jpg")} style={styles.imageTwo} />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  imageOne: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },

  imageThree: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },

  imageThreeCopy: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },

  imageTwo: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
});
