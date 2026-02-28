import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import SortRepositoriesContext from '../contexts/SortRepositoriesContext';

const styles = StyleSheet.create({
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

const OrderDropdown = () => {
  const { state, dispatch } = useContext(SortRepositoriesContext);

  return (
    <View style={styles.dropdown}>
      <Dropdown
        mode='modal'
        data={data}
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={state.label}
        value={state.value}
        onChange={(item) => {
          console.log(item);
          dispatch({
            type: 'SET_SORT',
            payload: item,
          });
        }}
      />
    </View>
  );
};

export default OrderDropdown;
