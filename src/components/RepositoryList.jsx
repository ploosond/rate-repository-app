import useRepositories from '../../hooks/useRepositories';
import Text from './Text';
import { useContext } from 'react';
import SortRepositoriesContext from '../contexts/SortRepositoriesContext';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const { state } = useContext(SortRepositoriesContext);
  const [debouncedSearchQuery] = useDebounce(state.searchKeyword, 500);

  const { repositories } = useRepositories({
    searchKeyword: debouncedSearchQuery,
    orderBy: state.value.orderBy,
    orderDirection: state.value.orderDirection,
  });


  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
