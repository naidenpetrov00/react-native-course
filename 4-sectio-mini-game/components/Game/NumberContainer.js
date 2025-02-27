import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: { color: Colors.accent500, fontSize: 36, fontWeight: "bold" },
});
