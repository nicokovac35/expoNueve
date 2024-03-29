import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MainNavigator from "./src/navigation"

import { Provider } from 'react-redux';

import store from "./src/store"
import AuthScreen from './src/screens/AuthScreen';
import CategoriesScreen from './src/screens/CatergoriesScreen';




export default function App() {

 
  return( 
    <Provider store={store}>
      <NavigationContainer >
        
      
    
          <BottomTabNavigator />
          
      </NavigationContainer>
    </Provider>  
  )
}

