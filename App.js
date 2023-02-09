import { StyleSheet, Text, View } from 'react-native';

import ShopNavigator from './src/navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';


export default function App() {

 

  return( 
      <NavigationContainer>
    
          <BottomTabNavigator />

      </NavigationContainer>
  )
}

