import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";

import * as Permissions from "expo-permissions";

import OrderScreen from "./screens/OrderScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { MainStackNavigator } from "./navigation/StackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    console.log(status, "status");
    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
      console.log(response, "respone");
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "md-home";
            } else if (route.name === "Order") {
              iconName = "md-list";
            } else if (route.name === "History") {
              iconName = "md-time";
            } else if (route.name === "Profile") {
              iconName = "md-contact";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
