import { useColorScheme, View } from "react-native";
import Colors from "../../constants/Colors";

export default function StrangerBubble({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.chatBackground }, style]}
      {...props}
    />
  );
}
