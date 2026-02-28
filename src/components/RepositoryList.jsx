import useRepositories from '../../hooks/useRepositories';
import Text from './Text';
import { useContext } from 'react';
import SortRepositoriesContext from '../contexts/SortRepositoriesContext';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const { state } = useContext(SortRepositoriesContext);

  const { repositories, loading, error } = useRepositories(state.value);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
