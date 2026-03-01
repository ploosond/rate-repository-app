import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import Text from './Text';
import useRepositoryReviews from '../../hooks/useRepositoryReviews';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, repoLoading, repoError } = useRepository(id);
  const { reviews, reviewLoading, reviewError, fetchMore } =
    useRepositoryReviews({ id, first: 2 });
  if (repoLoading) return <Text>Loading...</Text>;
  if (repoError) return <Text>Error: {repoError.message}</Text>;

  if (reviewLoading) return <Text>Loading...</Text>;
  if (reviewError) return <Text>Error: {reviewError.message}</Text>;

  const reviewNodes = reviews ? reviews?.edges?.map((edge) => edge.node) : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => (
        <RepositoryItem repository={repository} showButton={true} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
