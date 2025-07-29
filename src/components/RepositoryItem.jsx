import { StyleSheet, View } from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryStats from "./RepositoryStats";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    backgroundColor: "white",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryHeader item={item} />
      <RepositoryStats item={item} />
    </View>
  );
};

export default RepositoryItem;
