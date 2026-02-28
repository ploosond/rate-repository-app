import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import SortRepositoriesContext from '../contexts/SortRepositoriesContext';
import { Searchbar } from 'react-native-paper';
import theme from '../theme';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  searchBar: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  dropdown: {
    paddingHorizontal: 5,
  },
});

const data = [
  {
    label: 'Latest repositories',
    value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  },
  {
    label: 'Highest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  },
  {
    label: 'Lowest rated repositories',
    value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  },
];

const RepositoryListHeader = () => {
  const { state, dispatch } = useContext(SortRepositoriesContext);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        mode='bar'
        placeholder='Search'
        onChangeText={(text) => dispatch({ type: 'SET_SEARCH', payload: text })}
        value={state.searchKeyword}
      />
      <Dropdown
        style={styles.dropdown}
        mode='modal'
        data={data}
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={state.label}
        value={state.value}
        onChange={(item) => {
          dispatch({
            type: 'SET_SORT',
            payload: item,
          });
        }}
      />
    </View>
  );
};

export default RepositoryListHeader;
