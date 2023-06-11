import { View, FlatList, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onPressHandler }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onPressHandler={onPressHandler} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: { flex: 1 },
});

export default TodoList;
