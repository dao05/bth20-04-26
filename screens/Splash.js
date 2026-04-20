import React, { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import styles from "../styles/globalStyles";
import { useStore } from "../context/StoreContext";

export default function Splash({ navigation }) {
  const { isLoading, isAuthenticated } = useStore();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigation.replace("Home");
      } else {
        navigation.replace("Onboarding");
      }
    }
  }, [isAuthenticated, isLoading, navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image source={require("../assets/logosplash.png")} style={styles.logo} />
      <ActivityIndicator size="large" color="#53B175" style={{ marginTop: 24 }} />
    </View>
  );
}