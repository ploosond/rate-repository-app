export const initialState = {
  label: 'Latest repositories',
  value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  searchKeyword: '',
};

export const sortRepositoriesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return {
        ...state,
        label: action.payload.label,
        value: {
          orderBy: action.payload.value.orderBy,
          orderDirection: action.payload.value.orderDirection,
        },
      };
    case 'SET_SEARCH':
      return {
        ...state,
        searchKeyword: action.payload,
      };
    default:
      return state;
  }
};
