import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

export const MealItem = ({ meal }) => {
  const { id, title, imageUrl, duration, complexity, affordability } = meal;
  const navigation = useNavigation();

  const mealItemPressHandler = () => {
    navigation.navigate("MealDetails", { categoryId: id, title });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={mealItemPressHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
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
