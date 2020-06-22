import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";

export default function loginPage({ navigation }) {
  const pressHandler = () => {
    if (userId == 1 && userName == "Rifat") {
      navigation.navigate("home", {
        userId,
        userName,
      });
    } else {
      Alert.alert(
        "Wrong User Name",
        "Please Enter Valid User Name",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();

  const titletext = "Hello Rifat";
  return (
    <View>
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 5,
          marginTop: 50,
          height: 30,
        }}
        keyboardType="numeric"
        placeholder="User id"
        onChangeText={(text) => setUserId(text)}
        value={userId}
      />

      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 5,
          marginBottom: 10,
          marginTop: 10,
          height: 30,
        }}
        keyboardType="default"
        placeholder="user Name"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />

      <Button title="hello" onPress={pressHandler} />

      <Button
        title="Hi"
        onPress={() => {
          navigation.navigate("register");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    justifyContent: "center",
  },
});
