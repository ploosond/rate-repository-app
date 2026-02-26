import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../src/graphql/queries';

const useRepository = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repository: data?.repository,
    repoLoading: loading,
    repoError: error,
  };
};

export default useRepository;
