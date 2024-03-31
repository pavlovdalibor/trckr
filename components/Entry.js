import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";
import { useState } from "react";
import { DetailsModal } from "./DetailsModal";

export function Entry({ entry, update }) {
    const { description, createdAt } = entry;
    const date = new Date(createdAt);
    const filteredDate = `Saved on ${date.getUTCMonth()}-${date.getUTCDay()}-${date.getUTCFullYear()}.`;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.entry}>
            <DetailsModal
                visible={modalVisible}
                entry={entry}
                hide={() => setModalVisible(false)}
                update={update}
            />
            <Text style={styles.date}>{filteredDate}</Text>
            <Text style={styles.desc}>{description}</Text>
            <Button
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                See details
            </Button>
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
