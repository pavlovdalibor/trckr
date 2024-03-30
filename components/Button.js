import { Pressable, StyleSheet, Text } from "react-native";

export function Button({
  children,
  onPress,
  secondary = false,
  color,
  visible = true,
}) {
  return (
    visible && (
      <Pressable
        onPress={onPress}
        style={[
          styles.pressable,
          {
            backgroundColor: color || (secondary ? "white" : "black"),
            borderWidth: secondary ? 1 : 0,
          },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            color: secondary ? "black" : "white",
          }}
        >
          {children}
        </Text>
      </Pressable>
    )
  );
}

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    borderRadius: 8,
    borderColor: "lightgray",
    flexGrow: 1,
  },
});
