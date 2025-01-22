import { Image, Text, View, StyleSheet } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";

export const MealDetailsScreen = ({ route, navigation }) => {
  const { categoryId, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [categoryId, navigation]);

  const selectedMeal = MEALS.find((m) => m.id == categoryId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((i) => (
        <Text key={i}>{i}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((s) => (
        <Text key={s}>{s}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  title: { fontWeight: "bold", textAlign: "center", fontSize: 18, margin: 8 },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 8,
    justifyContent: "center",
  },
});
