import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  flexBox: { display: "flex", flexDirection: "row", gap: 18 },
  headerBox: { display: "flex", gap: 16, flexShrink: 1 },
  profileBox: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
});

const RepositoryHeader = ({ item }) => {
  return (
    <View style={styles.flexBox}>
      <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.headerBox}>
        <Text fontWeight="bold">{item.fullName}</Text>
        <Text color="secondary">{item.description}</Text>
        <View style={styles.profileBox}>
          <Text color="white">{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryHeader;
