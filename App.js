import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";

import HomeScreen from "./screens/HomeScreen2";
import OrderScreen from "./screens/LoginScreen";
import HistoryScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
import { Provider } from 'react-redux';
import store from "./store/";

// import RootStackScreen from './screens/RootStackScreen'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <RootStackScreen /> */}
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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Order" component={OrderScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </Provider>
  );
}
