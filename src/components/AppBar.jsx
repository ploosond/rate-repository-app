import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.colors.background,
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    minHeight: 100,
    backgroundColor: theme.colors.backgroundAppBar,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 15,
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      console.log('clicked sign out!');
      const authToken = await authStorage.getAccessToken();
      console.log('AUTH: ', authToken);
      navigate('/sign-in');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <Pressable>
          <Link to='/'>
            <AppBarTab text='Repositories' />
          </Link>
        </Pressable>
        {data?.me?.username ? (
          <View style={styles.tabs}>
            <Pressable>
              <Link to='/create-review'>
                <AppBarTab text='Create a review' />
              </Link>
            </Pressable>
            <Pressable onPress={signOut}>
              <AppBarTab text='Sign out' />
            </Pressable>
          </View>
        ) : (
          <Pressable>
            <Link to='/sign-in'>
              <AppBarTab text='Sign in' />
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
