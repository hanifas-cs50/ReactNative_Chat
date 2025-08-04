import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { marginTop: insets.top }]}>
      <ThemedText style={[styles.title, { marginBottom: 30 }]}>
        User Profile Page
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  beforeLink: {
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    color: "#3b82f6",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Profile;
