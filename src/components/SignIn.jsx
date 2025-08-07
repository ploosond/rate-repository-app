import { Pressable, StyleSheet, View } from "react-native";
import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    marginHorizontal: 15,
    gap: 15,
  },
  button: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    backgroundColor: theme.colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.inputField}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        error={formik.errors.username}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color="red">{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        style={styles.inputField}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        error={formik.errors.password}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="red">{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text fontWeight="bold" color="white">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
``;
