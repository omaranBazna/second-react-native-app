import { ActivityIndicator, StylesSheet, Text, View } from "react-native";
const Loading = () => {
  return <div></div>;
};

const styles = StylesSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#5637DD",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Loading;
