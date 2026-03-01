import useRepositories from '../../hooks/useRepositories';
import { useContext } from 'react';
import SortRepositoriesContext from '../contexts/SortRepositoriesContext';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const { state } = useContext(SortRepositoriesContext);
  const [debouncedSearchQuery] = useDebounce(state.searchKeyword, 500);

  const { repositories, fetchMore } = useRepositories({
    searchKeyword: debouncedSearchQuery,
    orderBy: state.value.orderBy,
    orderDirection: state.value.orderDirection,
    first: 3,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
