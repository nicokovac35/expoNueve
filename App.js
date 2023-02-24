import { StyleSheet, Text, View } from 'react-native';

import ShopNavigator from './src/navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

import { Provider } from 'react-redux';

import store from "./src/store"




export default function App() {

 

  return( 
    <Provider store={store}>
      <NavigationContainer>
    
          <BottomTabNavigator />

      </NavigationContainer>
    </Provider>  
  )
}

