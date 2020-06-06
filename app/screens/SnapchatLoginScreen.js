import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

const SnapchatLoginScreen = () => {
    return (
        <View
      style={{
        backgroundColor: "yellow",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          flex: 3,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "50%", height: "30%" }}
          source={{
            uri:
              "https://1000logos.net/wp-content/uploads/2017/07/Snapchat-Logo.png",
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => alert("Loging in to Snapchat 👻")}
        activeOpacity={0.9}
        style={{
          backgroundColor: "gold",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30, color: "black" }}> Login </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert("Signup to Snapchat 👻")}
        activeOpacity={0.9}
        style={{
          backgroundColor: "tomato",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30, color: "black" }}> Signup </Text>
        </View>
      </TouchableOpacity>
      
    </View>
    )
}

export default SnapchatLoginScreen

const styles = StyleSheet.create({})
