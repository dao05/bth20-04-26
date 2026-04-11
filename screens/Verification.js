import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/globalStyles";
import { userInfo } from "../config/user";

export default function Verification({ navigation }) {
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
          <Text style={styles.numberTitle}>Enter your 4-digit code</Text>

          {/* LABEL */}
          <Text style={styles.label}>Code</Text>

          {/* INPUT */}
          <View style={styles.inputRow}>
            <TextInput
              placeholder="- - - -"
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>

          {/* RESEND */}
          <TouchableOpacity>
            <Text style={styles.resend}>Resend Code</Text>
          </TouchableOpacity>

          {/* PUSH xuống dưới */}
          <View style={{ flex: 1 }} />

          {/* NEXT */}
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Location")}
          >
            <Image source={require("../assets/nexticon.png")} style={styles.nextIcon} />
          </TouchableOpacity>
           <Text style={styles.userText}>
                         {userInfo.name} - {userInfo.msv}
                       </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}