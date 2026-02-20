import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

const apolloClient = createApolloClient();
export default function App() {
  return (
    <NativeRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
