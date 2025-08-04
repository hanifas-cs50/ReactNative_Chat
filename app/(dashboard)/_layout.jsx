import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import ThemedView from "../../components/ThemedView";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar value="auto" />
      <ThemedView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.background,
              paddingTop: 20,
              marginBottom: insets.bottom,
            },
            tabBarActiveTintColor: theme.tabBarActive,
            tabBarInactiveTintColor: theme.tabBarInactive,
            animation: "fade",
          }}
        >
          <Tabs.Screen
            name="chat"
            options={{
              title: "Chat",
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    size={24}
                    name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                    color={focused ? theme.tabBarActive : theme.tabBarInactive}
                  />
                );
              },
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    size={24}
                    name={focused ? "person" : "person-outline"}
                    color={focused ? theme.tabBarActive : theme.tabBarInactive}
                  />
                );
              },
            }}
          />
          <Tabs.Screen
            name="about"
            options={{
              title: "About",
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    size={24}
                    name={focused ? "book" : "book-outline"}
                    color={focused ? theme.tabBarActive : theme.tabBarInactive}
                  />
                );
              },
            }}
          />
        </Tabs>
      </ThemedView>
    </>
  );
};

export default AuthLayout;
