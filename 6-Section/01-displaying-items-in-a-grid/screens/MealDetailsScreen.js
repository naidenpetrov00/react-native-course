import { Image, Text, View, StyleSheet, Button } from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { IconButton } from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "../store/favorites";

export const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const { categoryId, title } = route.params;

  const headerButtonHandler = () => {
    dispatch(addFavorites({ id: 1 }));
  };
  
  useEffect(() => {
    console.log(favoriteMealIds);
  }, [favoriteMealIds]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => <IconButton onPress={headerButtonHandler} />,
    });
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
