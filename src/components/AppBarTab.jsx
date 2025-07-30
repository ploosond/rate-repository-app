import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text fontSize="heading" fontWeight="bold" color="white">
          Repositories
        </Text>
      </Link>
      <Link to="/sign-in">
        <Text fontSize="heading" fontWeight="bold" color="white">
          Sign in
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
