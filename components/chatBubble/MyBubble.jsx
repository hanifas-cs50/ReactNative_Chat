import { View } from "react-native";

export default function MyBubble({ style, ...props }) {
  return (
    <View
      style={[{ backgroundColor: "#0ea5e9" }, style]}
      {...props}
    />
  );
}
