import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
          Hello React Native, I am Terry trying to build my first React Native
          App!
        </Text>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        ></Button>
        <Button
          title="List Page"
          onPress={() => navigation.navigate("List")}
        ></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 16,
  },
});
