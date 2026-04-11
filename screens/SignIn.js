import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/globalStyles";
import { userInfo } from "../config/user";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>

      {/* STATUS BAR */}
      <StatusBar style="light" translucent />

      {/* ẢNH FULL TRÊN */}
      <Image
        source={require("../assets/signinbg.png")}
        style={styles.topImage}
      />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.signinTitle}>Get your groceries</Text>
        <Text style={styles.signinSub}>with nectar</Text>

        {/* INPUT */}
        <View style={styles.inputRow}>
          <Image source={require("../assets/flagicon.png")} style={styles.flag} />
          <TextInput
            placeholder="+880"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* OR */}
        <Text style={styles.or}>Or connect with social media</Text>

        {/* GOOGLE */}
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#5383EC" }]}
          onPress={() => navigation.navigate("Number")}
        >
          <Image source={require("../assets/ggicon.png")} style={styles.icon} />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* FACEBOOK */}
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#4A66AC" }]}
          onPress={() => navigation.navigate("Number")}
        >
          <Image source={require("../assets/fbicon.png")} style={styles.icon} />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* USER */}
      <Text style={styles.userText}>
        {userInfo.name} - {userInfo.msv}
      </Text>
     <Text style={styles.userText}>
                {userInfo.name} - {userInfo.msv}
              </Text>
    </View>
  );
}