
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MainNavigation from "./src/navigation"

import { Provider } from 'react-redux';

import store from "./src/store"




export default function App() {

 //import MainNavigation from "./src/navigation" me aparece error de TEXT cuaando lo agrego al return. solo cuando pongo import MainNavigation, revise hacia atras y no encontre algun error de tipeo.}

 
  return( 
    <Provider store={store}>
      <NavigationContainer>
    
          <MainNavigation/>
 
      </NavigationContainer>
    </Provider>  
  )
}

