import { useApolloClient, useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../src/graphql/mutations';

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);
  const apolloClient = useApolloClient();

  const deleteReview = async (id) => {
    try {
      const { data } = await mutate({
        variables: {
          deleteReviewId: id,
        },
      });
      apolloClient.resetStore();
      return { data };
    } catch (e) {
      console.log(e);
    }
  };

  return [deleteReview];
};

export default useDeleteReview;
