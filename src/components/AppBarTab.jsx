import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
  },
});

const AppBarTab = () => {
  return <Text style={styles.text}>Repositiries</Text>;
};

export default AppBarTab;
