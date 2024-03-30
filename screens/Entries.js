import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { getEntries } from "../api";
import { Ionicons } from "@expo/vector-icons";
import { EntryModal } from "../components/EntryModal";
import { Entry } from "../components/Entry";

export function Entries() {
  const [entries, setEntries] = useState([]);
  const [entryModalVisible, setEntryModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getEntries();
      setEntries(Object.values(data));
    })();
  }, []);

  async function onConfirm() {
    const data = await getEntries();
      setEntries(Object.values(data));
  }

  return (
    <View style={styles.view}>
      <EntryModal
        visible={entryModalVisible}
        hide={() => {
          onConfirm()
          setEntryModalVisible(false);
        }}
      />
      <Wrapper>
        <View style={styles.titleView}>
          <Text style={styles.title}>My entries</Text>
          <Pressable
            style={styles.icon}
            onPress={() => {
              setEntryModalVisible(true);
            }}
          >
            <Ionicons name="add" size={24} color="white" />
          </Pressable>
        </View>
        <ScrollView>
          {entries.map((entry) => {
            return (
              <Entry
                key={entry.video}
                createdAt={entry.createdAt}
                description={entry.description}
                video={entry.video}
              />
            );
          })}
        </ScrollView>
      </Wrapper>
    </View>
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
  view: {
    flexGrow: 1,
  },
});
