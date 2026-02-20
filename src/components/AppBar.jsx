import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <Pressable>
          <Link to='/'>
            <AppBarTab text='Repositories' />
          </Link>
        </Pressable>
        <Pressable>
          <Link to='/sign-in'>
            <AppBarTab text='Sign in' />
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
