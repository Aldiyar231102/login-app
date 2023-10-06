import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../Button";

const JoinButton = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Join Now"
        onPress={() => navigation.navigate("Signup")}
        style={styles.joinBtn}
      />
    </View>
  );
};

export default JoinButton;

const styles = StyleSheet.create({
  joinBtn: {
    marginTop: 22,
    width: "100%",
  },
});
