import React from "react";
import { Pressable, Text } from "react-native";
import { goalItemStyles } from "./GoalItem.styles";

export const GoalItem = ({ itemData, onDeleteItem, id }) => {
  return (
    <Pressable
      onPress={() => onDeleteItem(id)}
      style={({ pressed }) => pressed && goalItemStyles.pressedItem}
    >
      <Text key={itemData.index} style={goalItemStyles.goalItem}>
        {itemData.text}
      </Text>
    </Pressable>
  );
};
