import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';



export default function App() {

  const [fontsLoaded] = useFonts({
    Merriweather: require("./src/screens/assets/fonts/Merriweather-Black.ttf")
  })

  if (!fontsLoaded) {
    return null
  }

  return <ShopNavigator/>
}

