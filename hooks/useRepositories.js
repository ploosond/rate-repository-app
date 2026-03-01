import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../src/graphql/queries';

const useRepositories = ({ searchKeyword, orderBy, orderDirection, first }) => {
  const { data, loading, error, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables: {
        searchKeyword,
        orderBy,
        orderDirection,
        first,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        searchKeyword,
        orderBy,
        orderDirection,
        first,
        after: data?.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
};

export default useRepositories;
