export const initialState = {
  label: 'Latest repositories',
  value: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
};

export const sortRepositoriesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return {
        label: action.payload.label,
        value: {
          orderBy: action.payload.value.orderBy,
          orderDirection: action.payload.value.orderDirection,
        },
      };
    default:
      return state;
  }
};
