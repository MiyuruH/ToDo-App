import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import axios from "axios";

const register = () => {

  const [name,setName] = useState ("");
  const [email,setEmail] = useState ("");
  const [password,setPassword] = useState ("");
  const router = useRouter ();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    }

    axios.post("http://10.0.2.2:3000/register",user).then((response) => {
      console.log(response);
      Alert.alert("Registration successful", "Your have been registered successfully");
      setEmail("");
      setPassword("");
      setName("");
    }).catch((error) => {
      Alert.alert("Registration failed", "An error occurred during registration");
      console.log("error", error);
    })
  }

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
            Register to your account
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
            <Entypo name="user" size={24} color="black" style={{ marginLeft: 18, marginRight: 18 }} />
            <TextInput
              value={name}
              onChangeText={( text ) => setName( text )}
              style={{ 
                color: "#000000",
                marginVertical: 10,
                width: 300,
                fontWeight: "bold", 
                fontFamily: "monospace", 
                fontSize: email ? 17 : 17
              }} 
              placeholder = "Enter your user name"
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
            <MaterialIcons name="email" size={24} color="black" style={{ marginLeft: 15, marginRight: 15 }} />
            <TextInput
              value={email}
              onChangeText={( text ) => setEmail( text )}
              style={{ 
                color: "#000000",
                marginVertical: 10,
                width: 300,
                fontWeight: "bold", 
                fontFamily: "monospace", 
                fontSize: email ? 17 : 17 
              }} 
              placeholder = "Enter your email address"
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
            <FontAwesome name="lock" size={24} color="black" style={{ marginLeft: 18, marginRight: 18 }} />
            <TextInput
              value= {password}
              secureTextEntry= {true}
              onChangeText={( text ) => setPassword( text )}
              style={{ 
                color: "#000000",
                marginVertical: 10,
                width: 300,
                fontWeight: "bold", 
                fontFamily: "monospace", 
                fontSize: email ? 17 : 17
              }} 
              placeholder = "Enter your Password"
            />
          </View>

          <View style={{ marginTop: 40 }}/>

          <Pressable 
            onPress={handleRegister}
            style={{width: 200, backgroundColor: "#000000", padding: 15, borderRadius: 8, marginLeft: "auto", marginRight: "auto"}}>
            <Text style={{textAlign: "center", color: "#FFFFFF", fontWeight: "bold", fontSize: 17, fontFamily: "monospace"}}> 
              SignUp 
            </Text>
          </Pressable>

          <Pressable 
            onPress={() => router.replace("/login")}
            style={{ marginTop: 10 }}>
            <Text style={{textAlign: "center", color: "#000000", fontWeight: "bold", fontSize: 15, fontFamily: "monospace"}}> 
              Already registered? Login
            </Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
