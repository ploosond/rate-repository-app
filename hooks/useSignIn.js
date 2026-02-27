import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../src/graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });

      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return { data };
    } catch (e) {
      console.log(e);
    }
  };

  return [signIn, result];
};

export default useSignIn;
