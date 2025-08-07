import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#525659",
    primary: "#0366d6",
    mainBackground: "#e1e4e8",
  },

  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 20,
  },

  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
    }),
  },

  fontWeights: {
    normal: "500",
    bold: "700",
  },
};

export default theme;
