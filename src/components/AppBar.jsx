import { Pressable, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 140,
    display: "flex",
    justifyContent: "center",
    paddingTop: 70,
  },
});

const AppBar = () => {
  return (
    <Pressable style={styles.container}>
      <AppBarTab />
    </Pressable>
  );
};

export default AppBar;
