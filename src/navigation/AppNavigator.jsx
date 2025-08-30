import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainList from "../screens/MainList";
import Settings from "../screens/Settings";
import History from "../screens/History";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "List") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "History") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="List"
        component={MainList}
        options={{ title: "Grocery List" }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ title: "History" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}
