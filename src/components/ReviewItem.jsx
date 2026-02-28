import { StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    gap: 10,
    padding: 20,
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
});

const ReviewItem = ({ review }) => {
  const { rating, createdAt, text, repository, user } = review;
  const formattedCreatedDate = new Date(createdAt).toLocaleDateString('de');
  return (
    <View style={styles.container}>
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
  );
};

export default ReviewItem;
