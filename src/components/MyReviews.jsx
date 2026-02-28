import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import Text from './Text';
import useRepositoryReviews from '../../hooks/useRepositoryReviews';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import useMe from '../../hooks/useMe';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { reviews, loading, error } = useMe(true);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const reviewNodes = reviews ? reviews?.edges?.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;
