import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem/GoalItem";
import { GoalInput } from "./components/GoalInput/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
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

  const closeModal = () => {
    setmodalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setmodalIsVisible(true)}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCloseModal={closeModal}
          />
        )}
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
    </>
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
