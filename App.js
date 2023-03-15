
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MainNavigator from "./src/navigation"

import { Provider } from 'react-redux';

import store from "./src/store"




export default function App() {



 
  return( 
    <Provider store={store}>
      <NavigationContainer>
    
          <MainNavigator />
 
      </NavigationContainer>
    </Provider>  
  )
}

