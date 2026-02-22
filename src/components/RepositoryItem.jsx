import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    gap: 10,
    backgroundColor: theme.colors.white,
  },
  image_Bio: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  bio: {
    flex: 1,
    gap: 10,
  },
  langaugeView: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 3,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.image_Bio}>
        <View>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.bio}>
          <Text fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={styles.langaugeView}>
            <Text color='white'>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <Stats title='Stars' value={convertToK(item.stargazersCount)} />
        <Stats title='Forks' value={convertToK(item.forksCount)} />
        <Stats title='Reviews' value={item.reviewCount} />
        <Stats title='Rating' value={item.ratingAverage} />
      </View>
    </View>
  );
};

const Stats = ({ title, value }) => {
  return (
    <View>
      <Text fontWeight='bold'>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

const convertToK = (value) => {
  const result = Number.parseFloat(value / 1000).toFixed(1);
  return result.endsWith('.0') ? result.slice(0, -2) + 'k' : result + 'k';
};

export default RepositoryItem;
