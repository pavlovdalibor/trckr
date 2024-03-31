import axios from "axios";
import "react-native-get-random-values";
import { v4 as generateId } from "uuid";
import { setItem, getItem } from "expo-secure-store";

const GOOGLE_FIREBASE_DB =
    "https://trckr-bdbc1-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getEntries() {
    const id = getItem("uuid");
    const data = await axios.get(`${GOOGLE_FIREBASE_DB}trckr/${id}.json`);
    return data.data.entries;
}

export async function saveEntry(description, video) {
    const id = getItem("uuid");
    await axios.post(`${GOOGLE_FIREBASE_DB}trckr/${id}/entries.json`, {
        description: description,
        createdAt: new Date(Date.now()).toISOString(),
        video: video,
    });
}

export async function deleteEntry(entryId) {
    const id = getItem("uuid");
    await axios.delete(
        `${GOOGLE_FIREBASE_DB}trckr/${id}/entries/${entryId}.json`
    );
}

export function checkDeviceId() {
    const existingId = getItem("uuid");
    if (existingId) return;

    const uuid = generateId();
    setItem("uuid", uuid);
    axios.put(`${GOOGLE_FIREBASE_DB}trckr/${uuid}.json`, {
        createdAt: new Date(Date.now()).toISOString(),
        entries: [],
    });
}
