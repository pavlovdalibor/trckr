import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

export function Input({ title, placeholder, setter }) {
    return (
        <View style={styles.input}>
            <Text>{title}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={setter}
            />
        </View>
    );
}

export function VideoInput({ title, onRecord, uri, saveUri }) {
    async function onGallery() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            quality: 1,
            selectionLimit: 1,
        });

        saveUri(result.assets[0].uri);
        uri = result.assets[0].uri;
    }

    MediaLibrary.requestPermissionsAsync();
    return (
        <View style={[styles.input, { flexGrow: uri ? 1 : 0 }]}>
            <Text>{title}</Text>
            {(uri === undefined && (
                <View style={styles.selector}>
                    <Button onPress={onGallery}>
                        <Ionicons name="image" size={24} />
                        {"\n"}Choose from gallery
                    </Button>
                    <Button onPress={onRecord}>
                        <Ionicons name="camera" size={24} />
                        {"\n"}Record in app
                    </Button>
                </View>
            )) || (
                <View style={styles.selector}>
                    <Video
                        style={{ flexGrow: 1, borderRadius: 8 }}
                        useNativeControls
                        resizeMode={ResizeMode.COVER}
                        isLooping
                        shouldPlay
                        source={{ uri: uri }}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        gap: 5,
    },
    textInput: {
        padding: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 8,
    },
    selector: {
        flexGrow: 1,
        padding: 10,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 8,
        gap: 5,
        flexDirection: "row",
    },
});
