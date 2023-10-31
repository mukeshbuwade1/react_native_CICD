import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
    }}>
      <Image style={{
        width: 200,
        height: 100
      }} source={require("./download.png")} />
      <Text style={{
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
      }}>FIRST CICD FOR REACT NATIVE APP</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})