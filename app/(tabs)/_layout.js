import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Tasks",
          tabBarLabelStyle: { color: "#000",  fontWeight: "700", fontFamily: "monospace"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="tasks" size={24} color="#00FFFF" />
            ) : (
              <FontAwesome name="tasks" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="calender"
        options={{
          tabBarLabel: "Calender",
          tabBarLabelStyle: { color: "#000", fontWeight: "700", fontFamily: "monospace" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="calendar-day" size={24} color="#00FFFF" />
            ) : (
              <FontAwesome5 name="calendar-day" size={24} color="black" />
            ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#000", fontWeight: "700", fontFamily: "monospace" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="account-box" size={24} color="#00FFFF" />
            ) : (
              <MaterialIcons name="account-box" size={24} color="black" />
            ),
        }}
      />
    </Tabs>
  );
}
