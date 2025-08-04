import { ScrollView, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import MyBubble from "../../components/chatBubble/MyBubble";
import StrangerBubble from "../../components/chatBubble/StrangerBubble";

function Chat() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { marginTop: insets.top }]}>
      <ThemedText style={[styles.title, { marginBottom: 20 }]}>
        Chat Page
      </ThemedText>
      <ScrollView style={styles.chatBox}>
        <MyBubble style={[styles.chatBubble, { marginBottom: 10 }]}>
          <Text style={[styles.myText, styles.chatText]}>Test</Text>
        </MyBubble>
        <StrangerBubble style={[styles.chatBubble, { marginBottom: 10 }]}>
          <ThemedText style={styles.chatText}>Test Me</ThemedText>
        </StrangerBubble>
        <MyBubble style={[styles.chatBubble, { marginBottom: 10 }]}>
          <Text style={[styles.myText, styles.chatText]}>Test</Text>
        </MyBubble>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  chatBox: {
    width: "100%",
    maxWidth: 400,
    padding: 10,
    borderWidth: 2,
    borderColor: "#64748b",
    borderRadius: 3,
  },
  chatBubble: {
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  myText: {
    color: "#fff",
    textAlign: "right",
  },
  chatText: {
    fontWeight: "bold",
  }
});

export default Chat;
