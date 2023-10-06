import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />

      <Text style={styles.text}>Loading Results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 16,
    marginTop: 32,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Loading;