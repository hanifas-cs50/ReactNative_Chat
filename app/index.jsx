import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>React Native Chat App</ThemedText>
      <View style={styles.smallContainer}>
        <Link href="/login" style={styles.link}>
          <Text>Login</Text>
        </Link>
        <Link href="/about" style={styles.link}>
          <Text>About Me</Text>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    width: 200,
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#3b82f6",
  },
});

export default Index;
