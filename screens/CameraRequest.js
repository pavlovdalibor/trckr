import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { Pressable, Text, View } from "react-native";
import { Linking } from "react-native";

export function CameraRequest() {
    async function requestCameraPermissions() {
        const request = await Camera.requestCameraPermissionsAsync();

        if (request.canAskAgain === false) {
            Linking.openSettings();
        }
    }

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                gap: 10,
            }}
        >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>trckr</Text>
            <Ionicons name="camera" size={40} color="black" />
            <Pressable
                onPress={requestCameraPermissions}
                style={{
                    padding: 10,
                    backgroundColor: "black",
                    borderRadius: 8,
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                <Text style={{ color: "white" }}>Grant camera permissions</Text>
                <Ionicons name="arrow-forward-circle" size={20} color="white" />
            </Pressable>
        </View>
    );
}
