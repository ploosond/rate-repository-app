import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 10,
  },
  inputs: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
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

const loginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.username && formik.errors.username
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color='alert'>{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.password && formik.errors.password
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color='alert'>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color='white'
          fontSize='subheading'
          fontWeight='bold'
          style={styles.buttonText}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const authStorage = useAuthStorage();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      const authToken = await authStorage.getAccessToken();
      console.log('AUTH: ', authToken);
      if (data) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
