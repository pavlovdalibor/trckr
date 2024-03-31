import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Wrapper } from "../components/Wrapper";
import { useEffect, useState } from "react";
import { getEntries, saveEntry } from "../api";
import { Ionicons } from "@expo/vector-icons";
import { EntryModal } from "../components/EntryModal";
import { Entry } from "../components/Entry";

export function Entries() {
    const [entries, setEntries] = useState([]);
    const [entryModalVisible, setEntryModalVisible] = useState(false);

    async function update() {
        const data = await getEntries();
        const entryIds = Object.keys(data);

        const formattedEntries = entryIds.map((entryId) => {
            const entryData = data[entryId];
            return {
                id: entryId,
                createdAt: entryData.createdAt,
                description: entryData.description,
                video: entryData.video,
            };
        });

        setEntries(formattedEntries);
    }

    useEffect(() => {
        (async () => {
            await update();
        })();
    }, []);

    async function onConfirm(video, description) {
        if (video !== undefined && description !== undefined) {
            await saveEntry(description, video);
            await update();
        }

        setEntryModalVisible(false);
    }

    return (
        <View style={styles.view}>
            <EntryModal visible={entryModalVisible} hide={onConfirm} />
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
                                key={entry.id}
                                createdAt={entry.createdAt}
                                description={entry.description}
                                entry={entry}
                                update={update}
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
