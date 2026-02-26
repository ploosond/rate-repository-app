import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../src/graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    try {
      const { data } = await mutate({
        variables: {
          review: { repositoryName, ownerName, rating: Number(rating), text },
        },
      });
      console.log('clicked review submit!');
      const authToken = await authStorage.getAccessToken();
      console.log('AUTH: ', authToken);
      apolloClient.resetStore();
      return { data };
    } catch (e) {
      console.log(e);
    }
  };

  return [createReview, result];
};

export default useCreateReview;
