import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const onPressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };
  const submitHandler = (text) => {
    if (text.length <= 3) {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        {
          text: "Understand",
          onPress: () => {},
        },
        {
          text: "I want like this",
          onPress: () => {},
        },
      ]);
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          text,
          key: Math.random().toString(),
        },
      ];
    });
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <TodoList todos={todos} onPressHandler={onPressHandler} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 30,
  },
});
