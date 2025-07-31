import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  inputField: {
    alignSelf: "stretch",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    fontSize: 24,
    borderColor: "#BABABA",
  },
  button: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
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
      />
      <TextInput
        secureTextEntry
        style={styles.inputField}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
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
