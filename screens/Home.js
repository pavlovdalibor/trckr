import { StyleSheet, Text } from "react-native";
import { Wrapper } from "../components/Wrapper";

export function Home() {
  return (
    <Wrapper>
      <Text style={styles.title}>Welcome to your trckr</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  uid: {
    color: "gray",
    fontSize: 10,
  },
});
