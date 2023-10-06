import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../../constants/colors'

const Subtitle = () => {
  return (
    <View style={styles.signupSubtitle}>
          <View style={styles.border} />
          <Text style={styles.signupText}>Or Sign up with</Text>
          <View style={styles.border} />
        </View>

  )
}

export default Subtitle

const styles = StyleSheet.create({
    border: {
        backgroundColor: COLORS.grey,
        flex: 1,
        height: 1,
        marginHorizontal: 10,
      },
    
      signupText: {
        fontSize: 14,
      },
    
      signupSubtitle: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
      },
})