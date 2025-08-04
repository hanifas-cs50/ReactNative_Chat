import React, { useEffect, useState } from "react";
import {
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../../hooks/useUser";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import MyBubble from "../../components/chatBubble/MyBubble";
import StrangerBubble from "../../components/chatBubble/StrangerBubble";
import ThemedInput from "../../components/ThemedInput";

import pb from "../../lib/db";

function Chat() {
  const { user } = useUser();
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) {
      return;
    }
    const data = {
      text: message.trim(),
      user_id: user.id,
    };
    // console.log(data);
    try {
      await pb.collection("message").create(data);
      setMessage("");
    } catch (error) {
      console.error(`[Send Msg Error]: ${error}`);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(async () => {
      try {
        const res = await pb.collection("message").getList(1, 20, {
          sort: "created",
          expand: "user_id",
        });
        if (isMounted) setMessages(res.items);
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, 3000); // every 3 seconds
  
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView style={[styles.container, { marginTop: insets.top }]}>
        <ThemedText style={styles.title}>Chat Page</ThemedText>
        <ScrollView
          style={styles.chatBox}
          contentContainerStyle={{ paddingBottom: 14 }}
        >
          {messages ? (
            messages.map((item) => {
              if (item.expand?.user_id?.id === user.id) {
                return (
                  <React.Fragment key={item.id}>
                    <ThemedText
                      style={[styles.handlename, styles.handlenameRight]}
                    >
                      {item.expand?.user_id?.username}
                    </ThemedText>
                    <MyBubble style={styles.chatBubble}>
                      <Text style={[styles.chatText, styles.myText]}>
                        {item.text}
                      </Text>
                      <Text style={[styles.timestamp, styles.timestampLight]}>
                        {new Date(item.created).toLocaleTimeString()}
                      </Text>
                    </MyBubble>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={item.id}>
                    <ThemedText style={styles.handlename}>
                      {item.expand?.user_id?.username}
                    </ThemedText>
                    <StrangerBubble style={styles.chatBubble}>
                      <Text style={styles.chatText}>{item.text}</Text>
                      <Text style={styles.timestamp}>
                        {new Date(item.created).toLocaleTimeString()}
                      </Text>
                    </StrangerBubble>
                  </React.Fragment>
                );
              }
            })
          ) : (
            <Text>No messages yet...</Text>
          )}
        </ScrollView>
        <View
          style={{
            width: "100%",
            maxWidth: 400,
            flexDirection: "row",
          }}
        >
          <ThemedInput
            style={styles.msgInput}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
          />
          <Pressable style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  chatBox: {
    width: "100%",
    maxWidth: 400,
    padding: 10,
    borderWidth: 2,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  chatBubble: {
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  handlename: {
    marginBottom: 4,
    marginHorizontal: 4,
    fontWeight: "bold",
  },
  handlenameRight: {
    textAlign: "right",
  },
  chatText: {
    fontSize: 16,
  },
  myText: {
    color: "#fff",
    textAlign: "right",
  },
  timestamp: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
  },
  timestampLight: {
    color: "#fff",
    textAlign: "left",
  },
  msgInput: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderBottomLeftRadius: 8,
  },
  sendButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Chat;
