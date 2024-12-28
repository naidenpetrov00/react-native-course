import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import { Colors } from "../constants/colors";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setenteredNumber] = useState("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Has to be > 0 < 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setenteredNumber(""),
        },
      ]);
      return;
    }

    onConfirmNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        value={enteredNumber}
        onChangeText={(value) => setenteredNumber(value)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setenteredNumber("")}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: { flexDirection: "row" },
  buttonContainer: { flex: 1 },
});
