import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CatergoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import DetailsScreen from "../screens/DetailsScreen";

import { COLORS } from "../constants/colors"



const Stack = createNativeStackNavigator ()


export default ShopNavigator = () => {
    return (
        
            <Stack.Navigator 
                initialRouteName="Categories"
                screenOptions={{
                    headerShadowVisible: false,
                    headerTitleStyle:{
                        fontWeight: "bold",
                    },
                    
                }}
            >
                
                
                <Stack.Screen
                
                 name="Categories"
                 component={CategoriesScreen}
                 options={{
                    
                    title:"Categorias",
                  
                 }}
                 
                 />
                 
                <Stack.Screen 
                    name="Products" 
                    component={ProductsScreen} 
                    options={({route}) =>({
                        title: route.params.title,

                    })}
                
                
                />
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
                 />
            </Stack.Navigator>
        
    )
}