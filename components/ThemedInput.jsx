import { TextInput, useColorScheme } from "react-native";
import Colors from "../constants/Colors";

export default function ThemedInput({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      style={[{ color: theme.secondaryText, backgroundColor: theme.chatBackground }, style]}
      placeholderTextColor={theme.secondaryText}
      {...props}
    />
  );
}
