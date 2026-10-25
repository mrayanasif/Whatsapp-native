
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const communities = [
  { name: "Aptech Community", groups: "Web Development, JavaScript", icon: "code-slash" },
  { name: "Friends Circle", groups: "Friends Group, Weekend Plans", icon: "people" },
  { name: "Study Community", groups: "Software Engineering, Projects", icon: "school" },
];

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Communities</Text>
        <Ionicons name="ellipsis-vertical" size={23} color="#FFFFFF" />
      </View>

      <ScrollView>
        <View style={styles.newCommunity}>
          <View style={styles.communityIcon}>
            <Ionicons name="people" size={28} color="#075E54" />
            <View style={styles.plus}>
              <Ionicons name="add" size={15} color="#FFFFFF" />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>New community</Text>
            <Text style={styles.subtitle}>
              Bring people together around a topic
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={20} color="#667781" />
        </View>

        {communities.map((item) => (
          <View key={item.name} style={styles.community}>
            <View style={styles.groupIcon}>
              <Ionicons
                name={item.icon as any}
                size={25}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.communityInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.groups}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#667781" />
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
    justifyContent: "space-between",
  },
  title: { color: "#FFFFFF", fontSize: 23, fontWeight: "700" },
  newCommunity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  communityIcon: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#D9FDD3",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    position: "absolute",
    bottom: -3,
    right: -3,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  community: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 16,
  },
  groupIcon: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "#008069",
    alignItems: "center",
    justifyContent: "center",
  },
  communityInfo: { flex: 1 },
  name: { color: "#111B21", fontSize: 15, fontWeight: "600" },
  subtitle: { color: "#667781", fontSize: 12, marginTop: 5 },
});
