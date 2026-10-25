
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const chats = [
  {
    id: "1",
    name: "Ali Ahmed",
    message: "Bhai, project complete hua?",
    time: "8:42 PM",
    unread: 2,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "Ahmed Khan",
    message: "Kal class hai na?",
    time: "8:30 PM",
    unread: 1,
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "3",
    name: "Family Group ❤️",
    message: "Ammi: Ghar kab aa rahe ho?",
    time: "7:55 PM",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: "4",
    name: "Aptech Friends",
    message: "Hamza: 😂😂",
    time: "7:20 PM",
    unread: 3,
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: "5",
    name: "Hassan",
    message: "Okay bro, done!",
    time: "6:45 PM",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "6",
    name: "Software Engineering",
    message: "Sara: Notes send kar dena",
    time: "5:30 PM",
    unread: 5,
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "7",
    name: "Usman",
    message: "Voice message",
    time: "4:15 PM",
    unread: 0,
    image: "https://i.pravatar.cc/150?img=11",
  },
];

export default function ChatsScreen() {
  const [search, setSearch] = useState("");
  const [selectedChat, setSelectedChat] = useState<
    (typeof chats)[number] | null
  >(null);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedChat) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setSelectedChat(null)}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Image
            source={{ uri: selectedChat.image }}
            style={styles.avatarSmall}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>{selectedChat.name}</Text>
            <Text style={styles.online}>tap here for contact info</Text>
          </View>

          <Ionicons name="videocam-outline" size={24} color="#FFFFFF" />
          <Ionicons name="call-outline" size={22} color="#FFFFFF" />
        </View>

        <View style={styles.conversation}>
          <View style={styles.receivedMessage}>
            <Text style={styles.messageText}>{selectedChat.message}</Text>
            <Text style={styles.messageTime}>{selectedChat.time}</Text>
          </View>

          {sentMessages.map((item, index) => (
            <View key={index} style={styles.sentMessage}>
              <Text style={styles.messageText}>{item}</Text>
              <Text style={styles.messageTime}>Now ✓✓</Text>
            </View>
          ))}
        </View>

        <View style={styles.inputRow}>
          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={() => {
              if (!message.trim()) return;
              setSentMessages((previous) => [...previous, message.trim()]);
              setMessage("");
            }}
            style={styles.messageInput}
            returnKeyType="send"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              if (!message.trim()) return;
              setSentMessages((previous) => [...previous, message.trim()]);
              setMessage("");
            }}
          >
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerActions}>
          <Ionicons name="camera-outline" size={24} color="#FFFFFF" />
          <Ionicons name="ellipsis-vertical" size={23} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={21} color="#667781" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#667781"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons name="close-circle" size={20} color="#667781" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.filters}>
        {["All", "Unread", "Favorites", "Groups"].map((item, index) => (
          <View
            key={item}
            style={[styles.filter, index === 0 && styles.activeFilter]}
          >
            <Text
              style={[
                styles.filterText,
                index === 0 && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>

      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => {
              setSelectedChat(item);
              setSentMessages([]);
            }}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />

            <View style={styles.chatDetails}>
              <View style={styles.chatTopRow}>
                <Text style={styles.chatName} numberOfLines={1}>
                  {item.name}
                </Text>

                <Text
                  style={[
                    styles.chatTime,
                    item.unread > 0 && styles.unreadTime,
                  ]}
                >
                  {item.time}
                </Text>
              </View>

              <View style={styles.chatBottomRow}>
                <Text style={styles.lastMessage} numberOfLines={1}>
                  {item.message}
                </Text>

                {item.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No chats found</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  header: {
    backgroundColor: "#075E54",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 13,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "700",
    flex: 1,
  },

  headerActions: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  searchContainer: {
    margin: 12,
    height: 44,
    paddingHorizontal: 13,
    borderRadius: 12,
    backgroundColor: "#F0F2F5",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchInput: { flex: 1, color: "#111B21", fontSize: 14 },

  filters: {
    flexDirection: "row",
    gap: 9,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },

  filter: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F0F2F5",
  },

  activeFilter: { backgroundColor: "#D9FDD3" },

  filterText: { fontSize: 13, color: "#54656F" },

  activeFilterText: { color: "#075E54", fontWeight: "700" },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    minHeight: 78,
  },

  avatar: {
    width: 53,
    height: 53,
    borderRadius: 27,
    backgroundColor: "#E0E0E0",
  },

  chatDetails: {
    flex: 1,
    marginLeft: 13,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },

  chatTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 6,
  },

  chatName: {
    flex: 1,
    color: "#111B21",
    fontSize: 16,
    fontWeight: "600",
  },

  chatTime: { color: "#667781", fontSize: 11 },

  unreadTime: { color: "#008069", fontWeight: "600" },

  chatBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  lastMessage: { flex: 1, color: "#667781", fontSize: 13 },

  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25D366",
  },

  badgeText: { color: "#FFFFFF", fontSize: 11, fontWeight: "700" },

  emptyText: { textAlign: "center", padding: 30, color: "#667781" },

  avatarSmall: { width: 40, height: 40, borderRadius: 20 },

  contactName: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },

  online: { color: "#D1E7E3", fontSize: 11 },

  conversation: {
    flex: 1,
    padding: 15,
    backgroundColor: "#EFEAE2",
    gap: 12,
  },

  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    maxWidth: "85%",
  },

  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#D9FDD3",
    padding: 10,
    borderRadius: 10,
    maxWidth: "85%",
  },

  messageText: { fontSize: 15, color: "#111B21" },

  messageTime: {
    fontSize: 10,
    color: "#667781",
    textAlign: "right",
    marginTop: 5,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    backgroundColor: "#F7F7F7",
  },

  messageInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  sendButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#075E54",
    alignItems: "center",
    justifyContent: "center",
  },
});
