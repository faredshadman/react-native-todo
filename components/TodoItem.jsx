import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TodoItem = ({ item, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="red" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 8,
  },
  itemText: {
    marginLeft: 10,
  },
});

export default TodoItem;
