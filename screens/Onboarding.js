import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/globalStyles";
import { userInfo } from "../config/user";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.onboardContainer}>
      <Image source={require("../assets/onboardingbackground.png")} style={styles.bg} />

      <View style={styles.overlay}>
        <Image source={require("../assets/logocarotonboarding.png")} style={styles.carrot} />

        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        <Text style={styles.subtitle}>
          Ger your groceries in as fast as one hour
        </Text>

        <TouchableOpacity
          style={styles.btnStart}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
         <Text style={styles.userText}>
                {userInfo.name} - {userInfo.msv}
              </Text>
      </View>
    </View> 
    
  );
  
}