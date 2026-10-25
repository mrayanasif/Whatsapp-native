
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const calls = [
  { name: "Ali Ahmed", time: "Today, 8:42 PM", type: "call", missed: false, img: "12" },
  { name: "Ahmed Khan", time: "Today, 7:30 PM", type: "videocam", missed: true, img: "13" },
  { name: "Hassan", time: "Yesterday, 9:15 PM", type: "call", missed: false, img: "15" },
  { name: "Usman", time: "Yesterday, 6:20 PM", type: "videocam", missed: true, img: "11" },
];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calls</Text>
        <Ionicons name="search-outline" size={24} color="#FFFFFF" />
        <Ionicons name="ellipsis-vertical" size={23} color="#FFFFFF" />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>Favorites</Text>

        <View style={styles.favorite}>
          <View style={styles.favoriteIcon}>
            <Ionicons name="heart" size={23} color="#FFFFFF" />
          </View>
          <View>
            <Text style={styles.name}>Add favorite</Text>
            <Text style={styles.subtitle}>Quickly call your favorites</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent</Text>

        {calls.map((item, index) => (
          <View key={index} style={styles.callItem}>
            <Image
              source={{ uri: `https://i.pravatar.cc/150?img=${item.img}` }}
              style={styles.avatar}
            />

            <View style={styles.callInfo}>
              <Text
                style={[styles.name, item.missed && styles.missed]}
              >
                {item.name}
              </Text>

              <View style={styles.timeRow}>
                <Ionicons
                  name={item.missed ? "arrow-down" : "arrow-up"}
                  size={14}
                  color={item.missed ? "#EA4335" : "#008069"}
                />
                <Text style={styles.subtitle}>{item.time}</Text>
              </View>
            </View>

            <Ionicons
              name={item.type as any}
              size={23}
              color="#008069"
            />
          </View>
        ))}
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
  title: { flex: 1, color: "#FFFFFF", fontSize: 23, fontWeight: "700" },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
    fontSize: 17,
    fontWeight: "700",
    color: "#111B21",
  },
  favorite: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 13,
  },
  favoriteIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#008069",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { color: "#111B21", fontSize: 15, fontWeight: "600" },
  subtitle: { color: "#667781", fontSize: 12, marginTop: 4 },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    gap: 13,
  },
  avatar: { width: 52, height: 52, borderRadius: 26 },
  callInfo: { flex: 1 },
  missed: { color: "#EA4335" },
  timeRow: { flexDirection: "row", alignItems: "center", gap: 5 },
});
