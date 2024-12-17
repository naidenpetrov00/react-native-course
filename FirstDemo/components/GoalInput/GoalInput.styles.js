import { StyleSheet } from "react-native";

export const goalInputStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  image: { width: "100%", height: "50%", margin: 20 },
  textInput: {
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
