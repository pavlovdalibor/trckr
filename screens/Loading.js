import { Text, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>trckr</Text>
      <Text>Loading...</Text>
    </View>
  );
}
