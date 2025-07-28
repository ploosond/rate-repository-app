import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  font: {
    fontSize: 18,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.font}>Full Name: {item.fullName}</Text>
      <Text style={styles.font}>Description: {item.description}</Text>
      <Text style={styles.font}>Language: {item.language}</Text>
      <Text style={styles.font}>Starts: {item.stargazersCount}</Text>
      <Text style={styles.font}>Forks: {item.forksCount}</Text>
      <Text style={styles.font}>Reviews: {item.reviewCount}</Text>
      <Text style={styles.font}>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
