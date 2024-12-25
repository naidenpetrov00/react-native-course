import PrimaryButton from "../components/PrimaryButton";
import { TextInput, View, StyleSheet } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    borderRadius: 16,
    elevation: 5,
    shadowColor: "white",
    // shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: { flexDirection: "row" },
  buttonContainer: { flex: 1 },
});
