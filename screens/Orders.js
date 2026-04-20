import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "../context/StoreContext";
import { formatPrice } from "../data";
import BottomMenu from "../components/BottomMenu";

export default function Orders({ navigation }) {
  const { orders } = useStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>My Orders</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
            <Text style={styles.backText}>Shop</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {orders.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>You have no orders yet.</Text>
              <Text style={styles.emptySubText}>Place an order from the cart to save it here.</Text>
            </View>
          ) : (
            orders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <View style={styles.orderHeader}>
                  <View>
                    <Text style={styles.orderId}>Order #{order.id}</Text>
                    <Text style={styles.orderDate}>{new Date(order.placedAt).toLocaleString()}</Text>
                  </View>
                  <Text style={styles.orderTotal}>{formatPrice(order.total)}</Text>
                </View>

                {order.items.map((item) => (
                  <View key={`${order.id}-${item.id}`} style={styles.orderItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemMeta}>{item.quantity} x {formatPrice(item.price)}</Text>
                  </View>
                ))}
              </View>
            ))
          )}
        </ScrollView>

        <BottomMenu navigation={navigation} active="Orders" />
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
    paddingBottom: 90,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
  },
  backText: {
    color: "#53B175",
    fontSize: 16,
    fontWeight: "700",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  emptyState: {
    alignItems: "center",
    marginTop: 80,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    maxWidth: 260,
  },
  orderCard: {
    backgroundColor: "#F8FFF3",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },
  orderDate: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: "700",
    color: "#53B175",
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },
  itemName: {
    fontSize: 14,
    color: "#181725",
    flex: 1,
    marginRight: 12,
  },
  itemMeta: {
    fontSize: 14,
    color: "#7C7C7C",
  },
});
