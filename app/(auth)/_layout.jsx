import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import ThemedView from "../../components/ThemedView";

const AuthLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <ThemedView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          <Stack.Screen name="login" options={{ title: "Login" }} />
          <Stack.Screen name="register" options={{ title: "Register" }} />
        </Stack>
      </ThemedView>
    </>
  );
};

export default AuthLayout;
