import { Pressable, ScrollView, StyleSheet, Text, View, TextInput, ViewBase, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo, Ionicons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BottomModal, ModalContent, ModalTitle, SlideAnimation } from "react-native-modals";
import axios from "axios";
import moment from "moment";
import { router, useRouter } from "expo-router";


const index = () => {
  const router = useRouter ();
  const [todos, setTodos] = useState ([]);
  const today = moment().format("MMM Do, YYYY");
  const [isModalVisible, setModalVisible] = useState (false);
  const [category, setCategory] = useState ("All");
  const [todo, setTodo] = useState ("");
  const [pendingTodos, setPendingTodos] = useState ([]);
  const [completedTodos, setCompletedTodos] = useState ([]);
  const [marked, setMarked] = useState (false);

  const suggestions = [
    {
      id: "0",
      todo: "Drink Water, Keep Healthy",
    },
    {
      id: "1",
      todo: "Go Exercising",
    },
    {
      id: "2",
      todo: "Go to Bed Early",
    },
    {
      id: "3",
      todo: "Take Pill Reminder",
    },
    {
      id: "4",
      todo: "Go Shopping",
    },
    {
      id: "5",
      todo: "Finish Assignments",
    },
  ];

  const addTodo = async () => {
    try {
      const todoData = {
        title: todo,
        category: category,
      }
      axios
        .post ("http://10.0.2.2:3000/todos/6641b5f7be44b5201299bd59", todoData)
        .then((response) => {
          console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });

      await getUserTodos();
      setModalVisible(false);
      setTodo("");

    } catch (error) {
      console.log("error", error);
    }
}

  useEffect(() => {
    getUserTodos();
  }, [marked, isModalVisible]);

  const getUserTodos = async () => {
    try {

    const response = await axios.get (`http://10.0.2.2:3000/users/6641b5f7be44b5201299bd59/todos`);
      console.log(response.data.todos);
      setTodos(response.data.todos);

      const fetchedTodos = response.data.todos || [];
      const pending = fetchedTodos.filter ( (todo) => todo.status !== "completed");
      const completed = fetchedTodos.filter ( (todo) => todo.status === "completed");

      setPendingTodos(pending);
      setCompletedTodos(completed);

    } catch (error) {

      console.log("error", error);

    }
  };

  const markTodoAsCompleted = async (todoId) => {
    try {

      setMarked (true);
      const response = await axios.patch(`http://10.0.2.2:3000/todos/${todoId}/complete`);
      console.log(response.data);

    } catch (error) {
      
      console.log ("error", error);

    }
  };

  console.log ("completed", completedTodos);
  console.log ("pending", pendingTodos);

  return (
    <>
      <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: "row", alignItems: "center", gap: 12 }}>   
        {pendingTodos?.length > 0 && <Text style={{ fontFamily: "monospace" }}> Tasks To Do ! {today}</Text>}
        <Pressable
         style={{ marginLeft: "auto" }}
         onPress={ () => setModalVisible (!isModalVisible) }>
          <Entypo name="circle-with-plus" size={35} color="#000000" style={{ marginTop: 5}} />
        </Pressable>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ padding: 10 }}>
          
          {todos?.length > 0 ? (
            <View style={{ padding: 10 }}>

              

              {pendingTodos?.map ( (item, index) => (

                <Pressable 
                  onPress={ (e) =>{
                    router?.push ({
                      pathname: "/home/info",
                      params: {
                        id: item._id,
                        title: item?.title,
                        category: item.category,
                        createdAt: item?.createdAt,
                        dueDate: item?.dueDate
                      },
                    });
                  }}
                  key={index} 
                  style={{ backgroundColor: "#E0E0E0", padding:10, borderRadius: 15, marginVertical: 5 }}
                >
                  <View 
                    style={{ flexDirection: "row", alignItems: "center", gap: 10}}
                  >
                    <Entypo 
                      onPress={ () => markTodoAsCompleted (item?._id)} 
                      name="circle" size={18} color="black" 
                    />
                    <Text style={{ flex: 1, fontFamily: "monospace" }}> {item.title} </Text>

                    <Feather name="flag" size={20} color="black" />

                  </View>
                </Pressable>               
              ))}

              

            </View>

          ) : (

            <View>             
              <Text 
                style={{ 
                  textAlign: "center", 
                  paddingTop: 300, 
                  fontFamily: "monospace", 
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#7393B3",
                  }} 
                >
                  Add a New Task
              </Text>
              <Pressable
                onPress={ () => setModalVisible (!isModalVisible) } 
                style={{ alignItems: "center", marginTop: 10 }}
                >
                <Entypo  name="circle-with-plus" size={50} color="#000000" />
              </Pressable>
            </View>
            
          )}
        </View>
      </ScrollView>

      <BottomModal 
        onBackdropPress={ () => setModalVisible (!isModalVisible) }
        onHardwareBackPress={ () => setModalVisible (!isModalVisible) }
        swipeDirection={[ "up", "down" ]}
        swipeThreshold={ 200 }
        modalTitle={ <ModalTitle title="Add a Task" /> }
        modalAnimation={ new SlideAnimation ({ slideFrom: "bottom"}) }
        visible={ isModalVisible }
        onTouchOutside={ () => setModalVisible (!isModalVisible) }
      >

        <ModalContent style={{ width: "100%", height: "auto" }}>
          <View style={{ width: "100", flexDirection: "row", alignItems: "center", gap: 10}}>

            <TextInput 
              value={ todo } 
              onChangeText={ (text) => setTodo(text) } 
              placeholder="Input a new task here..." 
              style={{ 
                padding: 10,
                borderColor: "#000000", 
                borderWidth: 2, 
                borderRadius: 10, 
                width: "90%", 
                marginVertical: 20,
                fontSize: 15,
                fontFamily: "monospace",
              }}
            />

            <Ionicons onPress={addTodo} name="send" size={30} color="#000000" />

          </View>

        </ModalContent>
      </BottomModal>

    </>
  );
};

export default index

const styles = StyleSheet.create({})
