import { useState } from "react";
import { View } from "react-native";
import { goalInputStyles } from "./GoalInput.styles";
import { TextInput, Button, Modal, Image } from "react-native";

export const GoalInput = ({ onAddGoal, visible, onCloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredValue) => {
    setEnteredGoalText(enteredValue);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={goalInputStyles.inputContainer}>
        <Image
          source={require("../../assets/image/Screenshot_20241208_180029.png")}
          style={goalInputStyles.image}
        />
        <TextInput
          style={goalInputStyles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={goalInputStyles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};
