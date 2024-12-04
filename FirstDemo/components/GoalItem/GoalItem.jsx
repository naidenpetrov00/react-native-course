import React from "react";
import { Text } from "react-native";
import { styles } from "./GoalItem.styles";

export const GoalItem = ({ itemData }) => {
  return (
    <Text key={itemData.index} style={styles.goalItem}>
      {itemData.item}
    </Text>
  );
};
