import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <Text style={styles.closeText}>❌</Text>
      </View>
      <View style={styles.deleteBtn}>
        <Text style={styles.deleteText}>👣</Text>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/gaming-chair.jpg")}
      ></Image>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeBtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    height: 100,
    width: 100,
    backgroundColor: "tomato",
    borderColor: "red",
    borderWidth: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBtn: {
    position: "absolute",
    bottom: 20,
    right: 0,
    right: 20,
    height: 100,
    width: 100,
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: 40,
  },
  deleteText: {
    fontSize: 40,
  },
});
