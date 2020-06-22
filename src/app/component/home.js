import React from "react";
import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
} from "react-native";

export default function home({ route }) {
  const { userId } = route.params;
  const { userName } = route.params;
  return (
    <View>
      <Text>Home Page</Text>
      <Text>userId: {JSON.stringify(userId)}</Text>
      <Text>userName: {JSON.stringify(userName)}</Text>
    </View>
  );
}
