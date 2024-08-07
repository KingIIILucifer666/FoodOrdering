import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { Link, Stack } from "expo-router";
import Colors from "@/src/constants/Colors";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} />

      <Button text="Sign in" />
      <Link href="/sign-up" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },

  label: {
    color: "gray",
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
  },

  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;
