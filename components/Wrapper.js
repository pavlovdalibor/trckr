import { StyleSheet, Text, View } from "react-native";
import { getItem } from "expo-secure-store";

export function Wrapper({ children }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.uid}>{getItem("uuid")}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    paddingTop: 30,
  },
  uid: {
    color: "gray",
    fontSize: 10,
  },
});
