import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  flexItemA: {
    flexGrow: 1,
    backgroundColor: "red",
  },
  flexItemB: {
    flexGrow: 2,
    backgroundColor: "blue",
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>{/* <Text>Flex item A</Text> */}</View>
      <View style={styles.flexItemA}>{/* <Text>Flex item A</Text> */}</View>
      <View style={styles.flexItemB}>{/* <Text>Flex item B</Text> */}</View>
    </View>
  );
};

export default FlexboxExample;
