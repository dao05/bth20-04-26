import React, { useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomMenu from "../components/BottomMenu";
import { favouriteImages } from "../config/imageSources";
import { formatPrice } from "../data";
import { useStore } from "../context/StoreContext";

function FavouriteRow({ item }) {
  return (
    <View style={styles.row}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.flexOne}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.meta}>{item.subtitle}</Text>
        </View>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <Image source={favouriteImages.arrowRightIcon} style={styles.arrow} />
      </View>
    </View>
  );
}

export default function Favourite({ navigation }) {
  const [errorVisible, setErrorVisible] = useState(false);
  const { favouriteProducts } = useStore();

  const handleAddAll = () => {
    setErrorVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Favourite</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentWrap}>
          {favouriteProducts.map((item) => (
            <FavouriteRow key={item.id} item={item} />
          ))}

          {favouriteProducts.length === 0 ? (
            <Text style={styles.emptyText}>No favourite products yet.</Text>
          ) : null}
        </ScrollView>

        <TouchableOpacity style={styles.addAllButton} onPress={handleAddAll}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>

        <Modal transparent visible={errorVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setErrorVisible(false)}
              >
                <Image source={require("../assets/x.png")} style={styles.closeIcon} />
              </TouchableOpacity>
              <Image
                source={require("../assets/fail.png")}
                style={styles.errorImage}
              />
              <Text style={styles.errorTitle}>Oops! Order Failed</Text>
              <Text style={styles.errorSubtitle}>Something went tembly wrong.</Text>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={() => setErrorVisible(false)}
              >
                <Text style={styles.retryText}>Please Try Again</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.backHomeButton}
                onPress={() => {
                  setErrorVisible(false);
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.backHomeText}>Back to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <BottomMenu navigation={navigation} active="Favourite" />
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
    paddingTop: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#181725",
    fontWeight: "700",
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  contentWrap: {
    paddingBottom: 180,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 24,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  flexOne: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: "#181725",
    fontWeight: "700",
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  price: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "700",
  },
  arrow: {
    width: 10,
    height: 18,
    resizeMode: "contain",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 48,
    fontSize: 15,
    color: "#7C7C7C",
    fontWeight: "500",
  },
  addAllButton: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 92,
    backgroundColor: "#53B175",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 20,
  },
  addAllText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 12,
  },
  modalClose: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F1F3F5",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  errorImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 8,
    textAlign: "center",
  },
  errorSubtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  retryButton: {
    width: "100%",
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  backHomeButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
  },
  backHomeText: {
    color: "#181725",
    fontSize: 16,
    fontWeight: "700",
  },
});
