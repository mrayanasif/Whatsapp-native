import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CallsScreen from "@/components/screens/CallsScreen";
import ChatsScreen from "@/components/screens/ChatsScreen";
import CommunitiesScreen from "@/components/screens/CommunitiesScreen";
import SettingsScreen from "@/components/screens/SettingsScreen";
import UpdatesScreen from "@/components/screens/UpdatesScreen";

const tabs = [
  { name: "Updates", icon: "ellipse-outline" },
  { name: "Calls", icon: "call-outline" },
  { name: "Communities", icon: "people-outline" },
  { name: "Chats", icon: "chatbubble" },
  { name: "Settings", icon: "settings-outline" },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Chats");

  const renderScreen = () => {
    switch (activeTab) {
      case "Updates":
        return <UpdatesScreen />;

      case "Calls":
        return <CallsScreen />;

      case "Communities":
        return <CommunitiesScreen />;

      case "Settings":
        return <SettingsScreen />;

      default:
        return <ChatsScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{renderScreen()}</View>

      <View style={styles.bottomNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => setActiveTab(tab.name)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                activeTab === tab.name && styles.activeIcon,
              ]}
            >
              <Ionicons
                name={tab.icon as any}
                size={22}
                color={activeTab === tab.name ? "#075E54" : "#54656F"}
              />
            </View>

            <Text
              style={[
                styles.navLabel,
                activeTab === tab.name && styles.activeLabel,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  screen: {
    flex: 1,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  iconContainer: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },

  activeIcon: {
    backgroundColor: "#D9FDD3",
  },

  navLabel: {
    fontSize: 11,
    color: "#54656F",
  },

  activeLabel: {
    color: "#075E54",
    fontWeight: "700",
  },
});
