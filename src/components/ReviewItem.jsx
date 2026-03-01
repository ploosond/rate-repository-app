import { Alert, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'col',
    backgroundColor: theme.colors.white,
    padding: 20,
    gap: 10,
  },
  reviews: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  rating: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  review: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
});

const ReviewItem = ({ review }) => {
  const { id, rating, createdAt, text, repository, user } = review;
  const formattedCreatedDate = new Date(createdAt).toLocaleDateString('de');
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.reviews}>
        <View style={styles.rating}>
          <Text fontWeight='bold' color='primary'>
            {rating}
          </Text>
        </View>
        <View style={styles.review}>
          <Text fontWeight='bold'>
            {user ? user.username : repository.fullName}
          </Text>
          <Text color='textSecondary'>{formattedCreatedDate}</Text>
          <Text style={{ flex: 1 }}>{text}</Text>
        </View>
      </View>
      {repository && (
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => navigate(`/repositories/${repository.id}`)}
          >
            <Text color='white' fontWeight='bold' style={styles.buttonText}>
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: theme.colors.alert }]}
            onPress={() => {
              Alert.alert(
                'Delete review',
                'Are you sure you want to delete this review?',
                [
                  {
                    text: 'CANCEL',
                    style: 'cancel',
                  },
                  {
                    text: 'DELETE',
                    style: 'destructive',
                    onPress: () => deleteReview(id),
                  },
                ],
              );
            }}
          >
            <Text color='white' fontWeight='bold' style={styles.buttonText}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
