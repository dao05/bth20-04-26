import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/globalStyles";
import { userInfo } from "../config/user";

export default function Location({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");
  const [openZone, setOpenZone] = useState(false);
  const [openArea, setOpenArea] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const zones = ["Banasree", "Dhanmondi", "Gulshan"];
  const areas = ["Residential", "Commercial", "Rural"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

        {/* BACK */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/backicon.png")} style={styles.back}  />
        </TouchableOpacity>

        {/* ICON */}
        <Image source={require("../assets/locationimg.png")} style={styles.locate} />

        {/* TITLE */}
        <Text style={styles.stitle}>Select Your Location</Text>

        {/* SUBTITLE */}
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with{"\n"}
          what’s happening in your area
        </Text>

        {/* ===== ZONE ===== */}
        <Text style={styles.label}>Your Zone</Text>

        <View style={[styles.dropdownWrapper, { zIndex: openZone ? 999 : 1 }]}>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => {
              setOpenZone(!openZone);
              setOpenArea(false);
            }}
          >
            <Text>{zone}</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>

          {openZone && (
            <View style={styles.dropdownList}>
              {zones.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setZone(item);
                    setOpenZone(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* ===== AREA ===== */}
        <Text style={styles.label}>Your Area</Text>

       <View style={[styles.dropdownWrapper, { zIndex: openArea ? 998 : 1 }]}>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => {
              setOpenArea(!openArea);
              setOpenZone(false);
              setIsTyping(false);
            }}
          >
            <Text>{area || "Select your area"}</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>

          {openArea && (
            <View style={styles.dropdownList}>
              {areas.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setArea(item);
                    setOpenArea(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}

              {/* Nhập tay */}
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  setOpenArea(false);
                  setIsTyping(true);
                }}
              >
                <Text style={{ color: "#53B175" }}>Enter manually</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* INPUT NHẬP */}
        {isTyping && (
          <TextInput
            style={styles.inputRow}
            placeholder="Type your area..."
            value={area}
            onChangeText={setArea}
          />
        )}

        {/* BUTTON */}
        <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.userText}>
                    {userInfo.name} - {userInfo.msv}
                  </Text>
      </View>
    </SafeAreaView>
  );
}