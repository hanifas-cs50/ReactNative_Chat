import { useColorScheme, Text } from "react-native";
import Colors from "../constants/Colors";

export default function ThemedText({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return <Text style={[{ color: theme.primaryText }, style]} {...props} />;
}
