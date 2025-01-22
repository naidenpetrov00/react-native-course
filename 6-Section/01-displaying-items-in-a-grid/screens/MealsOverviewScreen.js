import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export const MealsOverviewScreen = ({ route, navigation }) => {
  const routeFromHook = useRoute();
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = (itemData) => <MealItem meal={itemData.item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
