import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../src/graphql/queries';

const useRepository = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return {
    item: data?.repository,
    loading,
    error,
  };
};

export default useRepository;
