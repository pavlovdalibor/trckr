import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { getEntries } from "../api";
import { Ionicons } from "@expo/vector-icons";

export function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getEntries();
      console.log(data);
      setEntries(data);
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <View style={styles.titleView}>
        <Text style={styles.title}>My entries</Text>
        <Pressable style={styles.icon}>
          <Ionicons name="add" size={24} color="white" />
        </Pressable>
      </View>
      <View>
        <FlatList
          data={entries}
          renderItem={({ item }) => {
            return <Text>{item.description}</Text>;
          }}
        />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  titleView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  icon: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 8,
  },
});
