import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    fontSize: 24,
    borderColor: "#bababa",
  },
  error: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const inputStyle = [styles.input, error && styles.error, style];
  return <NativeTextInput style={inputStyle} {...props} />;
};

export default TextInput;
