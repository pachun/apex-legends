import { Platform, StyleSheet, Text, View } from "react-native"
import { DefaultTheme } from "@react-navigation/native"

interface GameTypeProps {
  gameType: string
}

const GameType = ({ gameType }: GameTypeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameTypeLabel}>{gameType}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? 100 : 44,
    justifyContent: "center",
    backgroundColor: DefaultTheme.colors.background,
  },
  gameTypeLabel: {
    fontSize: Platform.OS === "web" ? 42 : 16,
    fontWeight: "bold",
  },
})

export default GameType
