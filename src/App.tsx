import { StatusBar } from "expo-status-bar"
import FlashMessage from "react-native-flash-message"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Maps from "screens/Maps"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Apex Legends Maps" component={Maps} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      <FlashMessage />
    </>
  )
}

export default App
