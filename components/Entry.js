import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import { VideoInput } from "./Input";

export function Entry({ description, video, createdAt }) {
  const date = new Date(createdAt);
  const filteredDate = `Saved on ${date.getUTCMonth()}-${date.getUTCDay()}-${date.getUTCFullYear()}.`;

  console.log(video);

  return (
    <View style={styles.entry}>
      <Text style={styles.date}>{filteredDate}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Button>See details</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  entry: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    gap: 5,
    marginBottom: 10,
  },
  date: {
    color: "gray",
  },
});
