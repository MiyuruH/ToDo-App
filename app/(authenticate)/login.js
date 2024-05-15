import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    axios.post("http://10.0.2.2:3000/login", user).then((response) => {
      const token = response.data.token;
      console.log("token", token);
      AsyncStorage.setItem("authToken", token);
      router.replace("/(tabs)/home")
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ffffff", alignItems: "center" }}
    >
      <View style={{ marginTop: 200 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000000", fontFamily: "monospace" }}>
          TODO LIST TRACKER
        </Text>
      </View>

      <KeyboardAvoidingView>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000000", fontFamily: "monospace" }}>
            login to your account
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30
            }}>
            <MaterialIcons name="email" size={24} color="black" style={{ marginLeft: 15, marginRight: 15 }} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "#000000",
                marginVertical: 10,
                width: 300,
                fontWeight: "bold",
                fontFamily: "monospace",
                fontSize: email ? 17 : 17
              }}
              placeholder="Enter your email address"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30
            }}>
            <FontAwesome name="lock" size={29} color="black" style={{ marginLeft: 18, marginRight: 18 }} />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "#000000",
                marginVertical: 10,
                width: 300,
                fontWeight: "bold",
                fontFamily: "monospace",
                fontSize: email ? 17 : 17
              }}
              placeholder="Enter your Password"
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12, justifyContent: "space-between" }}>
            <Text style={{ color: "#000000", fontFamily: "monospace", fontWeight: "bold" }}> Keep me login </Text>
            <Text style={{ color: "#000000", fontFamily: "monospace", fontWeight: "bold" }}> Forgot Password? </Text>
          </View>

          <View style={{ marginTop: 40 }} />

          <Pressable
            onPress={handleLogin}
            style={{ width: 200, backgroundColor: "#000000", padding: 15, borderRadius: 8, marginLeft: "auto", marginRight: "auto" }}>
            <Text style={{ textAlign: "center", color: "#FFFFFF", fontWeight: "bold", fontSize: 17, fontFamily: "monospace" }}>
              Login
            </Text>
          </Pressable>

          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => router.replace("/register")}>
            <Text style={{ textAlign: "center", color: "#000000", fontWeight: "bold", fontSize: 15, fontFamily: "monospace" }}>
              Sign Up
            </Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
