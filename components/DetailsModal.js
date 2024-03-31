import { Modal, StyleSheet, Text, View } from "react-native";
import { Wrapper } from "./Wrapper";
import { Button } from "./Button";
import { useState } from "react";
import { Input, VideoInput } from "./Input";
import { CameraView } from "./CameraView";
import { deleteEntry } from "../api";

export function DetailsModal({ hide, visible, entry, update }) {
    const { video, id, description } = entry;

    async function onDelete() {
        await deleteEntry(id);
        update();
        hide();
    }

    return (
        <Modal visible={visible} animationType="slide">
            <Wrapper style={{ marginTop: 40, marginBottom: 20 }}>
                <Text style={styles.title}>Details for {description}</Text>
                <VideoInput title="Video" uri={video} />
                <View style={styles.buttons}>
                    <Button onPress={hide}>Done</Button>
                    <Button onPress={onDelete} color="red">
                        Delete
                    </Button>
                </View>
            </Wrapper>
        </Modal>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 28,
    },
    buttons: {
        flexDirection: "row",
        gap: 10,
    },
});
