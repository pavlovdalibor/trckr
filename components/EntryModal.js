import { Modal, StyleSheet, Text, View } from "react-native";
import { Wrapper } from "./Wrapper";
import { Button } from "./Button";
import { useState } from "react";
import { Input, VideoInput } from "./Input";
import { CameraView } from "./CameraView";
import { saveEntry } from "../api";

export function EntryModal({ hide, visible }) {
  const [description, setDescription] = useState("");
  const [cameraViewVisible, setCameraViewVisible] = useState(false);
  const [uri, setUri] = useState(undefined);

  function saveUri(uri) {
    setUri(uri);
    setCameraViewVisible(false);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <CameraView hide={saveUri} visible={cameraViewVisible} />
      <Wrapper style={{ marginTop: 40 }}>
        <Text style={styles.title}>Create a new entry</Text>
        <Input
          placeholder="e.g. 50 push-ups"
          setter={setDescription}
          title="Description"
        />
        <VideoInput
          uri={uri}
          title="Video"
          onRecord={() => setCameraViewVisible(true)}
        />
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              setUri(undefined);
              hide();
            }}
            secondary
          >
            Cancel
          </Button>
          <Button onPress={hide}>Confirm</Button>
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
    gap: 8,
  },
});
