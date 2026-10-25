import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const statuses = [
  { name: "Ali Ahmed", time: "Today, 8:30 PM", img: "12" },
  { name: "Ahmed Khan", time: "Today, 7:45 PM", img: "13" },
  { name: "Hassan", time: "Today, 6:20 PM", img: "15" },
  { name: "Usman", time: "Today, 5:10 PM", img: "11" },
];

export default function UpdatesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Updates</Text>
        <Ionicons name="camera-outline" size={25} color="#FFFFFF" />
        <Ionicons name="ellipsis-vertical" size={23} color="#FFFFFF" />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>Status</Text>

        <View style={styles.myStatus}>
          <View>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=68" }}
              style={styles.avatar}
            />
            <View style={styles.plus}>
              <Ionicons name="add" size={17} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.statusInfo}>
            <Text style={styles.name}>My status</Text>
            <Text style={styles.time}>Tap to add status update</Text>
          </View>
        </View>

        <Text style={styles.recentTitle}>Recent updates</Text>

        {statuses.map((status) => (
          <View key={status.name} style={styles.statusItem}>
            <View style={styles.ring}>
              <Image
                source={{ uri: `https://i.pravatar.cc/150?img=${status.img}` }}
                style={styles.avatar}
              />
            </View>

            <View style={styles.statusInfo}>
              <Text style={styles.name}>{status.name}</Text>
              <Text style={styles.time}>{status.time}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.footer}>
          Status updates disappear after 24 hours.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    backgroundColor: "#075E54",
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: { color: "#FFFFFF", fontSize: 23, fontWeight: "700", flex: 1 },
  sectionTitle: {
    padding: 16,
    fontSize: 19,
    fontWeight: "700",
    color: "#111B21",
  },
  myStatus: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 13,
  },
  avatar: { width: 53, height: 53, borderRadius: 27 },
  plus: {
    position: "absolute",
    bottom: 0,
    right: -2,
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  statusInfo: { flex: 1 },
  name: { fontSize: 15, fontWeight: "600", color: "#111B21" },
  time: { fontSize: 12, color: "#667781", marginTop: 4 },
  recentTitle: {
    backgroundColor: "#F0F2F5",
    padding: 12,
    color: "#008069",
    fontWeight: "600",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    gap: 13,
  },
  ring: {
    padding: 3,
    borderWidth: 2,
    borderColor: "#25D366",
    borderRadius: 30,
  },
  footer: {
    textAlign: "center",
    color: "#667781",
    fontSize: 12,
    padding: 25,
  },
});
