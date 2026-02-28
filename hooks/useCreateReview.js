import { useApolloClient, useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../src/graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const apolloClient = useApolloClient();

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    try {
      const { data } = await mutate({
        variables: {
          review: { repositoryName, ownerName, rating: Number(rating), text },
        },
      });
      apolloClient.resetStore();
      return { data };
    } catch (e) {
      console.log(e);
    }
  };

  return [createReview, result];
};

export default useCreateReview;
