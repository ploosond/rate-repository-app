import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_REVIEWS } from '../src/graphql/queries';

const useRepositoryReviews = ({ id, first }) => {
  const { loading, error, data, fetchMore, ...result } = useQuery(
    GET_REPOSITORY_REVIEWS,
    {
      variables: { id, first },
      fetchPolicy: 'cache-and-network',
    },
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        first,
        after: data?.repository?.reviews?.pageInfo?.endCursor,
      },
    });
  };

  return {
    reviews: data?.repository?.reviews,
    reviewLoading: loading,
    reviewError: error,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositoryReviews;
