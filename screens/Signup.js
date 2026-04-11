import React, { useState } from "react";
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

export default function Signup({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

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

          {/* LOGO */}
          <Image
            source={require("../assets/carroticon.png")}
            style={styles.carrotSmall}
          />

          {/* TITLE */}
          <Text style={styles.signupTitle}>Sign Up</Text>

          {/* SUB */}
          <Text style={styles.signupSub}>
            Enter your credentials to continue
          </Text>

          {/* EMAIL */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputRow}
            placeholder="Enter your email"
          />

          {/* PASSWORD */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Image
                source={require("../assets/seepwicon.png")}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* POLICY */}
          <Text style={styles.policy}>
            By continuing you agree to our{" "}
            <Text style={styles.link}>Terms of Service</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.submitText}>Sign Up</Text>
          </TouchableOpacity>

          {/* LOGIN */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.bottomText}>
              Already have an account?{" "}
              <Text style={{ color: "#53B175" }}>Log In</Text>
            </Text>
          </TouchableOpacity>
         <Text style={styles.userText}>
                    {userInfo.name} - {userInfo.msv}
                  </Text>
        </View>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
    
  );
}