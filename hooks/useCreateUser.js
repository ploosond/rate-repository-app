import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_USER } from '../src/graphql/mutations';

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const apolloClient = useApolloClient();

  const createUser = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: {
          user: { username, password },
        },
      });
      apolloClient.resetStore();
      return { data };
    } catch (e) {
      console.log(e);
    }
  };

  return [createUser, result];
};

export default useCreateUser;
