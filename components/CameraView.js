import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export function CameraView({ visible, hide }) {
    const [type, setType] = useState(CameraType.front);
    const [isRecording, setIsRecording] = useState(false);
    const cameraRef = useRef();

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    const startRecording = async () => {
        if (cameraRef.current) {
            try {
                const { uri } = await cameraRef.current.recordAsync();
                await MediaLibrary.saveToLibraryAsync(uri);

                hide(uri);
            } catch (error) {
                console.error("Failed to start recording", error);
            }
        }
    };

    const stopRecording = () => {
        if (cameraRef.current) {
            cameraRef.current.stopRecording();
        }
    };

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
        setIsRecording((prevState) => !prevState);
    };

    MediaLibrary.requestPermissionsAsync();

    return (
        <Modal animationType="slide" visible={visible}>
            <Camera ref={cameraRef} type={type} style={styles.camera}>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button visible={!isRecording} onPress={hide}>
                            <Ionicons name="exit" size={24} /> {"\n"}
                            Cancel
                        </Button>
                        <Button
                            color={isRecording ? "red" : "black"}
                            onPress={toggleRecording}
                        >
                            <Ionicons name="videocam" size={24} /> {"\n"}
                            {isRecording ? "Stop & Save" : "Record"}
                        </Button>
                        <Button
                            visible={!isRecording}
                            onPress={toggleCameraType}
                        >
                            <Ionicons name="camera-reverse" size={24} /> {"\n"}
                            Flip camera
                        </Button>
                    </View>
                </View>
            </Camera>
        </Modal>
    );
}

const styles = StyleSheet.create({
    camera: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 60,
    },
    buttonContainer: {
        gap: 5,
        flexDirection: "row",
    },
});
