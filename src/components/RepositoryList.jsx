import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 16,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const repositoryNodes = repositories
    ? repositories.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
    />
  );
};

export default RepositoryList;
