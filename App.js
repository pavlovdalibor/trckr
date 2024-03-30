import { checkDeviceId } from "./api";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Entries } from "./screens/Entries";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { CameraRequest } from "./screens/CameraRequest";
import { Loading } from "./screens/Loading";

const Tab = createBottomTabNavigator();

function navigatorOptions(route) {
  return {
    title: "trckr",
    headerStyle: { backgroundColor: "black" },
    headerTintColor: "white",
    tabBarLabel: route.name,
    tabBarActiveTintColor: "black",
    tabBarInactiveTintColor: "gray",
  };
}

export default function App() {
  checkDeviceId();

  const [hasCameraPerms, setHasCameraPerms] = useState();

  useEffect(() => {
    (async () => {
      const cameraPerms = await Camera.requestCameraPermissionsAsync();
      setHasCameraPerms(cameraPerms);
    })();
  }, []);

  if (hasCameraPerms === undefined) {
    return <Loading />;
  } else if (hasCameraPerms && hasCameraPerms.status === "denied") {
    return <CameraRequest />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => navigatorOptions(route)}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="home"
                  size={20}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Entries"
            component={Entries}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name="list"
                  size={20}
                  color={focused ? "black" : "gray"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
