import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import rns from "./app/screens/rns";
import SnapchatLoginScreen from "./app/screens/SnapchatLoginScreen";

import RNSpeedometer from "react-native-speedometer";

export default function App() {
  const [count, setCount] = useState(0);

  const [value,setValue] = useState(0);

  function onChange(value){
    if(value){
      setValue(parseInt(value));
    }else{
      setValue(0);
    }
  }

  const { landscape } = useDeviceOrientation();

  console.log(landscape);

  const onPress = () => {
    setCount(count + 1);
  };

  console.log(useDimensions());

  function handlepress() {
    alert("Hello from function!");
  }

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <SnapchatLoginScreen />
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Speedometer Value"
        style={styles.textInput}
        onChangeText={onChange}
      />
      <RNSpeedometer style={styles.speedometer} value={value} size={350} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    color:'white',
    justifyContent: 'flex-end',
    marginVertical:100
  },
  text: {
    color: Platform.OS === "android" ? "red" : "green",
    fontSize: 30,
    fontWeight: "900",
    padding: "5%",
  },
  image: {
    // height: StatusBar.currentHeight,
    margin: "5%",
    height: 500,

    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    height: 50,
    fontSize: 25,
    marginVertical: 50,
    marginHorizontal: 20,
  },
  speedometer:{
    marginVertical:150
  }
});
