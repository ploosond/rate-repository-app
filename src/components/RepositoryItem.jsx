import { Image, Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    gap: 10,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
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
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
});

const RepositoryItem = ({ repository, showButton }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
    url,
  } = repository;
  const handleUrlPress = () => Linking.openURL(url);

  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.image_Bio}>
        <View>
          <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={styles.bio}>
          <Text fontWeight='bold'>{fullName}</Text>
          <Text color='textSecondary'>{description}</Text>
          <View style={styles.langaugeView}>
            <Text color='white'>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <Stats title='Stars' value={convertToK(stargazersCount)} />
        <Stats title='Forks' value={convertToK(forksCount)} />
        <Stats title='Reviews' value={reviewCount} />
        <Stats title='Rating' value={ratingAverage} />
      </View>
      {showButton && (
        <Pressable style={styles.button} onPress={handleUrlPress}>
          <Text
            color='white'
            fontSize='subheading'
            fontWeight='bold'
            style={styles.buttonText}
          >
            Open in GitHub
          </Text>
        </Pressable>
      )}
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
