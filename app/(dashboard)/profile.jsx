import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../../hooks/useUser";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import StrangerBubble from "../../components/chatBubble/StrangerBubble";

function Profile() {
  const insets = useSafeAreaInsets();
  const { user, logout } = useUser();

  return (
    <ThemedView style={[styles.container, { marginTop: insets.top }]}>
      <ThemedText style={[styles.title, { marginBottom: 30 }]}>
        User Profile Page
      </ThemedText>
      <View style={{ flex: 1, justifyContent: "center", gap: 8 }}>
        <StrangerBubble style={styles.smallContainer}>
          <ThemedText style={styles.label}>Handlename:</ThemedText>
          <ThemedText style={styles.profile}>{user.handlename}</ThemedText>
        </StrangerBubble>
        <StrangerBubble style={styles.smallContainer}>
          <ThemedText style={styles.label}>Username:</ThemedText>
          <ThemedText style={styles.profile}>{user.username}</ThemedText>
        </StrangerBubble>
      </View>

      <Pressable
        style={styles.logoutButton}
        onPress={() => logout()}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  smallContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 2.5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profile: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
