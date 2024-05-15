import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import axios from "axios";
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

const index = () => {
  const today = moment().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const [todos, setTodos] = useState([]);

  const fetchCompletedTodos = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/todos/completed/${selectedDate}`
      );

      const completedTodos = response.data.completedTodos || [];
      setTodos(completedTodos);

    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCompletedTodos();
  }, [selectedDate]);

  console.log(todos);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF " }}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#000000",
          },
        }}
        style={{
          height: 300,
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      />

      <View style={{ marginTop: 20 }} />

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginVertical: 10, marginHorizontal: 15 }}>
        <Text style={{ fontFamily: "monospace" }}> Completed Task </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {todos?.map((item, index) => (

          <Pressable
            key={index}
            style={{ backgroundColor: "#E0E0E0", padding: 10, borderRadius: 15, marginVertical: 5, marginHorizontal: 15 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <AntDesign name="checkcircle" size={18} color="#808080" />
              <Text style={{ flex: 1, textDecorationLine: "line-through", color: "#808080", fontFamily: "monospace" }}>
                {item.title}
              </Text>
              <Feather name="flag" size={20} color="#808080" />
            </View>
          </Pressable>
        ))}
      </ScrollView>

    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
