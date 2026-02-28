import { useQuery } from '@apollo/client';
import { ME } from '../src/graphql/queries';

const useMe = (boolean) => {
  const { loading, error, data } = useQuery(ME, {
    variables: { includeReviews: boolean },
    fetchPolicy: 'cache-and-network',
  });

  return {
    username: data?.me?.username,
    reviews: data?.me?.reviews,
    loading,
    error,
  };
};

export default useMe;
