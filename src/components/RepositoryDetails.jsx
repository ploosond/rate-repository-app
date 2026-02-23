import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import Text from './Text';

const RepositoryDetails = () => {
  const { id } = useParams();
  const { item, loading, error } = useRepository(id);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return <RepositoryItem item={item} showButton={true} />;
};

export default RepositoryDetails;
