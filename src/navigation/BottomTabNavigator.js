import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";


const BottomTabs = createBottomTabNavigator ();


export default BottomTabNavigator = () => {
    return(
        <BottomTabs.Navigator>

            <BottomTabs.Screen name="ShopTab" component={ShopNavigator} />
            <BottomTabs.Screen name="CartTab" component={CartNavigator}/>

        </BottomTabs.Navigator>
    )
}