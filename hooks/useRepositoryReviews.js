import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_REVIEWS } from '../src/graphql/queries';

const useRepositoryReviews = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return {
    reviews: data?.repository?.reviews,
    reviewLoading: loading,
    reviewError: error,
  };
};

export default useRepositoryReviews;
