import { Text, View, StyleSheet } from "react-native";
import { Title } from "../components/Title";
import { useState } from "react";
import { generateRandomBetween } from "../utils/numberGenerator";
import { NumberContainer } from "../components/Game/NumberContainer";

export const GameScreen = ({ pickedNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setcurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 16,
  },
});
