import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import React, { useState } from "react";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    setText(val);
  };
  const handlePressAndReset = () => {
    submitHandler(text);
    setText("");
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        placeholder="Enter todo"
        defaultValue={text}
      />
      <View style={styles.buttonWrapper}>
        <Button onPress={handlePressAndReset} title="Add" color="#fff" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  buttonWrapper: {
    backgroundColor: "coral",
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default AddTodo;
