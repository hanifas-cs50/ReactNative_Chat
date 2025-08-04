import { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, login } = useUser();

  const handleSubmit = () => {
    setLoading(true);
    setError("");

    const trimmed = username.trim();

    if (!trimmed || !password) {
      setError("All fields must be filled");
      setLoading(false);
      return;
    }

    try {
      login(trimmed, password);
      // console.log(`Success: ${JSON.stringify(trimmed)}`);
      console.log(`Current User: ${JSON.stringify(user)}`);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView style={styles.container}>
        <ThemedText style={[styles.title, { marginBottom: 20 }]}>
          Chat App Login
        </ThemedText>

        {error && (
          <View
            style={{
              padding: 10,
              marginBottom: 20,
              borderRadius: 2.5,
              backgroundColor: "#ef4444",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Error: {error}
            </Text>
          </View>
        )}

        <ThemedInput
          style={[styles.input, { marginBottom: 8 }]}
          placeholder="Username..."
          value={username}
          onChangeText={setUsername}
        />
        <ThemedInput
          style={[styles.input, { marginBottom: 8 }]}
          placeholder="Password..."
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          title="Login"
          // onPress={() => console.log("Pressed")}
          onPress={handleSubmit}
          color="#3b82f6"
          disabled={loading}
        />

        <ThemedText style={{ marginTop: 16, textAlign: "center" }}>
          Don't have an account?{" "}
          <Link href="/register">
            <ThemedText style={styles.link}>Register</ThemedText>
          </Link>
        </ThemedText>
        
        {/*    
        <ThemedText style={{ marginTop: 16, textAlign: "center" }}>
          Preview?{" "}
          <Link href="/chat">
            <ThemedText style={styles.link}>Press Here</ThemedText>
          </Link>
        </ThemedText>
        */}
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    padding: 10,
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  link: {
    color: "#3b82f6", // #3b82f6
  },
});

export default Login;
