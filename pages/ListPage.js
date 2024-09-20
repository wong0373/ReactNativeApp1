import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 16,
              fontSize: 30,
              backgroundColor: "#397872b3",
              margin: 4,
            }}
          >
            {item.title}
          </Text>
        )}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
      <Pressable onPress={() => navigation.navigate("Home")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  },
  {
    id: "3",
    title: "Item 3",
  },
  {
    id: "4",
    title: "Item 4",
  },
  {
    id: "5",
    title: "Item 5",
  },
  {
    id: "6",
    title: "Item 6",
  },
  {
    id: "7",
    title: "Item 7",
  },
  {
    id: "8",
    title: "Item 8",
  },
  {
    id: "9",
    title: "Item 9",
  },
  {
    id: "10",
    title: "Item 10",
  },
  {
    id: "11",
    title: "Item 11",
  },
  {
    id: "12",
    title: "Item 12",
  },
  {
    id: "13",
    title: "Item 13",
  },
  {
    id: "14",
    title: "Item 14",
  },
  {
    id: "15",
    title: "Item 15",
  },
  {
    id: "16",
    title: "Item 16",
  },
  {
    id: "17",
    title: "Item 17",
  },
  {
    id: "18",
    title: "Item 18",
  },
  {
    id: "19",
    title: "Item 19",
  },
  {
    id: "20",
    title: "Item 20",
  },
  {
    id: "21",
    title: "Item 21",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
  button: {
    backgroundColor: "#007AFF", // You can change the color
    paddingVertical: 15, // Adjust vertical padding for height
    paddingHorizontal: 15, // Adjust horizontal padding for width
    borderRadius: 5, // Rounded corners
    margin: 20,
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 18, // Text size
    fontWeight: "bold",
    textAlign: "center",
  },
});
