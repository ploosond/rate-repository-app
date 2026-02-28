import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../src/graphql/queries';

const useRepositories = ({ searchKeyword, orderBy, orderDirection }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: {
      searchKeyword,
      orderBy,
      orderDirection,
    },
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories,
    loading,
    error,
  };
};

export default useRepositories;
