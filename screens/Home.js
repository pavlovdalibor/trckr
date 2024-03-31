import { StyleSheet, Text } from "react-native";
import { Wrapper } from "../components/Wrapper";

export function Home() {
    return (
        <Wrapper>
            <Text style={styles.title}>Welcome to your trckr</Text>
            <Text style={styles.sub}>About</Text>
            <Text>
                This app will allow you to record yourself or select any workout
                video to track your workouts.
            </Text>
            <Text style={styles.sub}>UUID</Text>
            <Text>
                Your unique user id (UUID) is visible at the top of the app.
            </Text>
            <Text style={styles.sub}>Usage</Text>
            <Text>1. Go to Entries by using the bottom navigation.</Text>
            <Text>2. Tap the + icon top right.</Text>
            <Text>
                3. Add a description for your workout and record/select a video.
            </Text>
            <Text>
                4. Confirm your new entry and you'll see it in the entries list.
            </Text>
            <Text style={styles.sub}>Details</Text>
            <Text>
                By tapping "Details" on each entry, you can rewatch the video.
                Note that the videos are stored locally on your device, and if
                you delete them, they won't be displayed.
            </Text>
            <Text>
                You can also delete the entries by tapping the "Delete" button.
            </Text>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 28,
    },
    uid: {
        color: "gray",
        fontSize: 10,
    },
    sub: {
        fontSize: 22,
        fontWeight: "bold",
    },
});
