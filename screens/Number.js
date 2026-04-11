import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";

import styles from "../styles/globalStyles";
import { userInfo } from "../config/user";

export default function Number({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>

          {/* BACK */}
         <TouchableOpacity onPress={() => navigation.goBack()}>
  <Image source={require("../assets/backicon.png")} style={styles.back} />
    </TouchableOpacity>

          {/* TITLE */}
          <Text style={styles.numberTitle}>Enter your mobile number</Text>

          {/* LABEL */}
          <Text style={styles.label}>Mobile Number</Text>

          {/* INPUT */}
          <View style={styles.inputRow}>
            <Image source={require("../assets/flagicon.png")} style={styles.flag} />
            <TextInput
              placeholder="+880"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          <View style={{ flex: 1 }} />

          {/* NEXT */}
         <TouchableOpacity
  style={styles.nextBtn}
  onPress={() => navigation.navigate("Verification")}
>
  <Image
    source={require("../assets/nexticon.png")}
    style={styles.nextIcon}
  />
</TouchableOpacity>
          {/* USER */}
          <Text style={styles.userText}>
            {userInfo.name} - {userInfo.msv}
          </Text>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}