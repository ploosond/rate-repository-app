import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import Text from './Text';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  dropdown: {
    minHeight: 50,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

const data = [
  {
    label: 'Latest repositories',
    value: {
      orderBy: 'CREATED_AT',
    },
  },
  {
    label: 'Highest rated repositories',
    value: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
  },
  {
    label: 'Lowest rated repositories',
    value: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    },
  },
];

const OrderDropdown = ({ data, initialValue, onSelect }) => {
  const [label, setLabel] = useState(initialValue.label);
  const [value, setValue] = useState(initialValue.value);

  const handleChange = (item) => {
    setLabel(item.label);
    setValue(item.value);
    onSelect(item.value);
  };

  return (
    <View style={styles.dropdown}>
      <Dropdown
        mode='modal'
        data={data}
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onSelect }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem repository={item} showButton={false} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <OrderDropdown data={data} initialValue={data[0]} onSelect={onSelect} />
      }
    />
  );
};

const RepositoryList = () => {
  const [value, setValue] = useState(data[0].value);

  const { repositories, loading, error } = useRepositories(value);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <RepositoryListContainer repositories={repositories} onSelect={setValue} />
  );
};

export default RepositoryList;
