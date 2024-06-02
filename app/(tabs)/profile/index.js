import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";

const index = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  const fetchTaskData = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3000/todos/count");
      const { totalCompletedTodos, totalPendingTodos } = response.data;
      setCompletedTasks(totalCompletedTodos);
      setPendingTasks(totalPendingTodos);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  console.log("completed", completedTasks);
  console.log("pending", pendingTasks);

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30, marginTop: 10 }}
          source={{
            uri: "https://walkersarewelcome.org.uk/wp-content/uploads/computer-icons-google-account-icon-design-login-png-favpng-jFjxPac6saRuDE3LiyqsYTEZM.jpg",
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", fontFamily: "monospace" }}>
            My Account
          </Text>
          <Text style={{ fontSize: 15, color: "#808080", marginTop: 4, fontFamily: "monospace" }}>
            Select Categories
          </Text>
        </View>
      </View>

      <View style={{ marginVertical: 12, marginTop: 10 }}>
        <Text style={{ fontFamily: "monospace", marginBottom: 5 }}> Tasks Overview </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#000000",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", fontFamily: "monospace", color: "#FFFFFF"}}
            >
              {completedTasks}
            </Text>
            <Text style={{ marginTop: 4, fontFamily: "monospace", color: "#FFFFFF" }}> Completed Tasks </Text>
          </View>

          <View
            style={{
              backgroundColor: "#000000",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", fontFamily: "monospace", color: "#FFFFFF" }}
            >
              {pendingTasks}
            </Text>
            <Text style={{ marginTop: 4, fontFamily: "monospace", color: "#FFFFFF" }}> Pending Tasks </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
