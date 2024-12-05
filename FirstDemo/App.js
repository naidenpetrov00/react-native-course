import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem/GoalItem";
import { GoalInput } from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setcourseGoals] = useState([{}]);

  const addGoalHandler = (enteredGoalText) => {
    setcourseGoals((state) => [
      ...state,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setcourseGoals((state) => state.filter((g) => g.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
