import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
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

const reviewSchema = yup.object().shape({
  repositoryName: yup.string().required('Repository owner name is required'),
  ownerName: yup.string().required('Repository name is required'),
  rating: yup.number().min(0).max(100).required('Rating is required'),
  text: yup.string().optional(),
});

export const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating,
        text,
      });
      if (data) {
        navigate(`/repositories/${ownerName}.${repositoryName}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      repositoryName: '',
      ownerName: '',
      rating: null,
      text: '',
    },
    validationSchema: reviewSchema,
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
              formik.touched.ownerName && formik.errors.ownerName
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text color='alert'>{formik.errors.ownerName}</Text>
      )}
      <TextInput
        autoCapitalize='none'
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.repositoryName && formik.errors.repositoryName
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text color='alert'>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.rating && formik.errors.rating
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text color='alert'>{formik.errors.rating}</Text>
      )}
      <TextInput
        multiline
        style={[
          styles.inputs,
          {
            borderColor:
              formik.touched.text && formik.errors.text
                ? theme.colors.alert
                : theme.colors.textSecondary,
          },
        ]}
        placeholder='Review'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
      />
      {formik.touched.text && formik.errors.text && (
        <Text color='alert'>{formik.errors.text}</Text>
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          color='white'
          fontSize='subheading'
          fontWeight='bold'
          style={styles.buttonText}
        >
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReview;
