import { StyleSheet, View } from "react-native";
import RepositoryStatItem from "./RepositoryStatItem";

const styles = StyleSheet.create({
  statBox: {
    marginTop: 20,
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.statBox}>
      <RepositoryStatItem label="Stars" value={item.stargazersCount} />
      <RepositoryStatItem label="Forks" value={item.forksCount} />
      <RepositoryStatItem label="Reviews" value={item.reviewCount} />
      <RepositoryStatItem label="Rating" value={item.ratingAverage} />
    </View>
  );
};

export default RepositoryStats;
