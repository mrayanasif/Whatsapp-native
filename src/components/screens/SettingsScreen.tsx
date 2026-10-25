
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const settings = [
  { title: "Account", subtitle: "Security notifications, change number", icon: "key-outline" },
  { title: "Privacy", subtitle: "Block contacts, disappearing messages", icon: "lock-closed-outline" },
  { title: "Avatar", subtitle: "Create, edit, profile photo", icon: "person-circle-outline" },
  { title: "Chats", subtitle: "Theme, wallpapers, chat history", icon: "chatbubble-outline" },
  { title: "Notifications", subtitle: "Message, group & call tones", icon: "notifications-outline" },
  { title: "Storage and data", subtitle: "Network usage, auto-download", icon: "cloud-outline" },
  { title: "App language", subtitle: "English (device language)", icon: "language-outline" },
  { title: "Help", subtitle: "Help center, contact us, privacy policy", icon: "help-circle-outline" },
  { title: "Invite a friend", subtitle: "", icon: "people-outline" },
];

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Ionicons name="search-outline" size={24} color="#FFFFFF" />
      </View>

      <ScrollView>
        <View style={styles.profile}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=68" }}
            style={styles.avatar}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Rayan</Text>
            <Text style={styles.profileAbout}>Hey there! I am using WhatsApp.</Text>
          </View>

          <Ionicons name="qr-code-outline" size={24} color="#008069" />
        </View>

        {settings.map((item) => (
          <View key={item.title} style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons
                name={item.icon as any}
                size={23}
                color="#54656F"
              />
            </View>

            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              {item.subtitle ? (
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              ) : null}
            </View>
          </View>
        ))}

        <Text style={styles.footer}>WhatsApp Clone · Portfolio Project</Text>
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 17,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  profileInfo: { flex: 1 },
  profileName: { color: "#111B21", fontSize: 19, fontWeight: "600" },
  profileAbout: { color: "#667781", fontSize: 13, marginTop: 5 },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 15,
    gap: 17,
  },
  settingIcon: { width: 28, alignItems: "center" },
  settingInfo: { flex: 1 },
  settingTitle: { color: "#111B21", fontSize: 15 },
  subtitle: { color: "#667781", fontSize: 12, marginTop: 5 },
  footer: {
    color: "#667781",
    textAlign: "center",
    paddingVertical: 25,
    fontSize: 12,
  },
});
