
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen"

const Stack = createNativeStackNavigator ()

export default OrdersNavigator = () => {
    return (
        
            <Stack.Navigator 
                initialRouteName="Orders"
                screenOptions={{
                    headerShadowVisible :false,
                    headerTitleStyle:{
                        fontWeight: "bold",
                    },
                    
                }}
            >
                        
                <Stack.Screen        
                 name="Orders"
                 component={CartScreen}
                 options={{
                      title:"Ordenes",              
                 }}
                 />
            </Stack.Navigator>
        
    )
}