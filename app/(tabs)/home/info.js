import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Entypo, AntDesign, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

const info = () => {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Ionicons name="arrow-back" size={30} color="#000000" />
        <Entypo name="dots-three-vertical" size={28} color="#000000" />
      </View>

      <View style={{ marginTop: 6 }}>
        <Text
          style={{ fontSize: 16, fontWeight: "700", fontFamily: "monospace" }}
        >
          Category - {params?.category}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          fontWeight: "700",
          fontFamily: "monospace",
        }}
      >
        {params?.title}
      </Text>

      <View style={{ marginTop: 50 }} />

      <Pressable
        style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
      >
        <AntDesign name="pluscircleo" size={24} color="#000000" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            fontFamily: "monospace",
            color: "#808080",
          }}
        >
          Add a Subtask
        </Text>
      </Pressable>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <AntDesign name="calendar" size={24} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#808080",
              }}
            >
              Due Date
            </Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#808080", padding: 8, borderRadius: 6 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#FFFFFF",
              }}
            >
              {params?.dueDate}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <Ionicons name="time-sharp" size={24} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#808080",
              }}
            >
              Time and Reminder
            </Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#808080", padding: 8, borderRadius: 6 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#FFFFFF",
              }}
            >
              No
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <FontAwesome6 name="repeat" size={24} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#808080",
              }}
            >
              Repeat Task
            </Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#808080", padding: 8, borderRadius: 6 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#FFFFFF",
              }}
            >
              No
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <SimpleLineIcons name="note" size={24} color="#000000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#808080",
              }}
            >
              Notes
            </Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#808080", padding: 8, borderRadius: 6 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "monospace",
                color: "#FFFFFF",
              }}
            >
              Not Added
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default info;

const styles = StyleSheet.create({});
