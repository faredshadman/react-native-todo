import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    {
      name: "farid",
      id: "1",
    },
    {
      name: "yusif",
      id: "2",
    },
    {
      name: "movlan",
      id: "3",
    },
    {
      name: "ulviyya",
      id: "4",
    },
    {
      name: "ilkin",
      id: "5",
    },
    {
      name: "fatime",
      id: "6",
    },
    {
      name: "bowser",
      id: "8",
    },
  ]);
  const onPressHandler = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressHandler(item.id)}
            style={styles.itemContainer}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <ScrollView>
        {people.map((item) => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  itemContainer: {
    marginVertical: 2,
    flex: 1,
  },
  item: {
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
