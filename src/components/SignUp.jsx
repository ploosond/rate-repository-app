import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateUser from '../../hooks/useCreateUser';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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

const registerSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Password confirmation is required'),
});

export const SignUp = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await createUser({
        username,
        password,
      });
      if (data) {
        await signIn({ username, password });
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
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
        autoCapitalize='none'
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

      <TextInput
        secureTextEntry
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Password confirmation'
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text color='alert'>{formik.errors.confirmPassword}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color='white'
          fontSize='subheading'
          fontWeight='bold'
          style={styles.buttonText}
        >
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
