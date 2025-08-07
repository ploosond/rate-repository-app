import { StyleSheet, View } from "react-native";
import Text from "./Text";
import convertorK from "../lib/convertorK";

const styles = StyleSheet.create({
  statItem: { display: "flex", gap: 16, alignItems: "center" },
});

const RepositoryStatItem = ({ label, value }) => {
  return (
    <View style={styles.statItem}>
      <Text fontWeight="bold">{convertorK(value)}</Text>
      <Text color="secondary">{label}</Text>
    </View>
  );
};

export default RepositoryStatItem;
