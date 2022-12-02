import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#458b00",
    alignItems: "left",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default styles;
