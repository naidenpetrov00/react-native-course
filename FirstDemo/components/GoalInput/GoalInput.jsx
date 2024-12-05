import { useState } from "react";
import { View } from "react-native";
import { goalInputStyles } from "./GoalInput.styles";
import { TextInput, Button } from "react-native";

export const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredValue) => {
    setEnteredGoalText(enteredValue);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={goalInputStyles.inputContainer}>
      <TextInput
        style={goalInputStyles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler}></Button>
    </View>
  );
};
