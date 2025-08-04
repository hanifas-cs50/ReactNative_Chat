import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";

function Register() {
  const [handlename, setHandlename] = useState("");
  const [tag, setTag] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, register } = useUser();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const trimmed = {
      handlename: handlename.trim(),
      username: username.trim(),
    };

    if (!trimmed.handlename || !trimmed.username || !password || !confirm) {
      setError("All fields must be filled");
      setLoading(false);
      return;
    }

    if (trimmed.username.length < 5 || trimmed.username.length > 20) {
      setError("Username must be between 5 and 20 characters long");
      setLoading(false);
      return;
    }

    const validUsername = /^[a-zA-Z0-9_]+$/;
    if (!validUsername.test(trimmed.username)) {
      setError("Username can only contain letters, numbers, and underscores");
      setLoading(false);
      return;
    }

    if (password.length < 3) {
      setError("Password must be more than 3 characters long");
      setLoading(false);
      return;
    }
    if (password !== confirm) {
      setError("Password and confirm password do not match");
      setLoading(false);
      return;
    }

    try {
      await register(trimmed.handlename, trimmed.username, password);
      // console.log(`Success: ${JSON.stringify(trimmed)}`);
      // console.log(`Current User: ${JSON.stringify(user)}`);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 10000);
    setTag(`#${randomNum.toString().padStart(4, "0")}`);
    console.log(`Current User: ${JSON.stringify(user)}`);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[styles.title, { marginBottom: 10 }]}>
        Chat App Register
      </ThemedText>
      <ThemedText style={{ marginBottom: 20, textAlign: "center" }}>
        Your username is for logging in, while your handlename is displayed to
        other users.
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

      <View
        style={{
          marginBottom: 8,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ThemedInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Type your handlename..."
          value={handlename}
          onChangeText={setHandlename}
        />
        <ThemedText style={{ marginRight: 8 }}>{tag}</ThemedText>
      </View>
      <ThemedInput
        style={[styles.input, { marginBottom: 8 }]}
        placeholder="Type your username..."
        value={username}
        onChangeText={setUsername}
      />
      <ThemedInput
        style={[styles.input, { marginBottom: 8 }]}
        placeholder="Type your password..."
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <ThemedInput
        style={[styles.input, { marginBottom: 8 }]}
        placeholder="Retype your password..."
        secureTextEntry={true}
        value={confirm}
        onChangeText={setConfirm}
      />

      <Button
        title="Register"
        // onPress={() => console.log("Pressed")}
        onPress={handleSubmit}
        color="#3b82f6"
        disabled={loading}
      />

      <ThemedText style={{ marginTop: 16, textAlign: "center" }}>
        Already have an account?{" "}
        <Link href="/login">
          <ThemedText style={styles.link}>Login</ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
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

export default Register;
