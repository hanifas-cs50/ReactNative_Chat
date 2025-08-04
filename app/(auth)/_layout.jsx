import { Redirect, Stack } from "expo-router";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const { user } = useUser();

  if (user) {
    return <Redirect href="/chat" />;
  }

  return (
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
  );
};

export default AuthLayout;
