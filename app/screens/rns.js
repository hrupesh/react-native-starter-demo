import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";

import RNSpeedometer from "react-native-speedometer";

const rns = () => {
  state = {
    value: 0,
  };

  onChange = (value) => this.setState({ value: parseInt(value) });

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        placeholder="Speedometer Value"
        style={styles.textInput}
        onChangeText={this.onChange}
      />
      <RNSpeedometer value={this.state.value} size={200} />
    </SafeAreaView>
  );
};

export default rns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: "black",
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
});
