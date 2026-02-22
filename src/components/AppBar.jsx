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
    gap: 10,
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorgae = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await authStorgae.removeAccessToken();
      apolloClient.resetStore();
      navigate('/sign-in');

      console.log('clicked sign out!');
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
          <Pressable onPress={signOut}>
            <AppBarTab text='Sign out' />
          </Pressable>
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
