import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { useReducer } from 'react';
import {
  initialState,
  sortRepositoriesReducer,
} from './src/reducers/sortRepositoriesReducer';
import SortRepositoriesContext from './src/contexts/SortRepositoriesContext';

const authStorage = new AuthStorage('auth');
const apolloClient = createApolloClient(authStorage);

export default function App() {
  const [state, dispatch] = useReducer(sortRepositoriesReducer, initialState);
  return (
    <NativeRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <SortRepositoriesContext.Provider value={{ state, dispatch }}>
            <Main />
          </SortRepositoriesContext.Provider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
