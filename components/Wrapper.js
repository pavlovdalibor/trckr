import { StyleSheet, Text, View } from "react-native";
import { getItem } from "expo-secure-store";

export function Wrapper({ children, style = {} }) {
    return (
        <View style={[styles.wrapper, style]}>
            <Text style={styles.uid}>{getItem("uuid")}</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        flexGrow: 1,
        padding: 20,
        gap: 10,
    },
    uid: {
        color: "gray",
        fontSize: 10,
    },
});
