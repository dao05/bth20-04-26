import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomMenu from "../components/BottomMenu";
import { useStore } from "../context/StoreContext";

const options = [
  { label: "Orders", icon: require("../assets/order.png"), route: "Orders" },
  { label: "My Details", icon: require("../assets/detail.png") },
  { label: "Delivery Address", icon: require("../assets/locate.png") },
  { label: "Payment Methods", icon: require("../assets/payment.png") },
  { label: "Promo Cord", icon: require("../assets/promo.png") },
  { label: "Notifications", icon: require("../assets/noti.png") },
  { label: "Help", icon: require("../assets/help.png") },
  { label: "About", icon: require("../assets/abt.png") },
];

export default function Account({ navigation }) {
  const { logout } = useStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.profileCard}>
            <Image source={require("../assets/pt.gif")} style={styles.avatar} />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Afsar Hossen</Text>
              <Text style={styles.profileEmail}>lmshuvo97@gmail.com</Text>
            </View>
            <View style={styles.editBadge}>
              <Text style={styles.editIcon}>✎</Text>
            </View>
          </View>

          <View style={styles.optionList}>
            {options.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={styles.optionRow}
                onPress={() => item.route && navigation.navigate(item.route)}
                activeOpacity={item.route ? 0.7 : 1}
              >
                <View style={styles.optionLeft}>
                  <Image source={item.icon} style={styles.optionIcon} />
                  <Text style={styles.optionLabel}>{item.label}</Text>
                </View>
                <Image source={require("../assets/next.png")} style={styles.optionArrow} />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={async () => { await logout(); navigation.replace("Login"); }}>
            <View style={styles.logoutLeft}>
              <Image source={require("../assets/log out.png")} style={styles.logoutIcon} />
              <Text style={styles.logoutLabel}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <BottomMenu navigation={navigation} active="Account" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 24,
    paddingBottom: 140,
  },
  profileCard: {
    borderRadius: 24,
    padding: 20,
    alignItems: "center",
    marginBottom: 24,
    flexDirection: "row",
    gap: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "contain",
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  editBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E8F4EA",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    fontSize: 18,
    color: "#53B175",
    fontWeight: "700",
  },
  optionList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 8,
    overflow: "hidden",
    marginBottom: 24,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  optionIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  optionLabel: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "600",
  },
  optionArrow: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  logoutButton: {
    backgroundColor: "#F2F3F2",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logoutLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  logoutIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  logoutLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#53B175",
  },
});
