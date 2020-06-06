import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.imagebackground}
      resizeMode={"cover"}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        ></Image>
        <Text style={styles.logotext}> I am Panda 🐼 </Text>
      </View>
      <View style={styles.loginBtn}>
        <Text style={styles.btnText}> Login </Text>
      </View>
      <View style={styles.signupBtn}>
        <Text style={styles.btnText}> Signup </Text>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    height: 75,
    width: "100%",
    backgroundColor: "#fc6c65",
    alignItems: "center",
    justifyContent: "center",
  },
  signupBtn: {
    height: 75,
    width: "100%",
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 300,
    width: 300,
  },
  logotext: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 1,
    color: "black",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  btnText: {
    fontSize: 30,
    fontWeight: "400",
    color:'white'
  },
});
