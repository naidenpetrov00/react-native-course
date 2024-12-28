import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { GameScreen } from "./screens/GameScreen";
import { Colors } from "./constants/colors";

export default function App() {
  const [userNumber, setuserNumber] = useState(null);

  const pickedNumberHadler = (pickedNumber) => {
    setuserNumber(pickedNumber);
  };

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? (
            <GameScreen pickedNumber={userNumber} />
          ) : (
            <StartGameScreen onConfirmNumber={pickedNumberHadler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.5 },
});
