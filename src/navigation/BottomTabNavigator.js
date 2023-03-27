import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
 
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import AuthNavigator from "./AuthNavigator";
import MapNavigator from "./MapNavigator";

const BottomTabs = createBottomTabNavigator ();


export default BottomTabNavigator = () => {
    return(
        <BottomTabs.Navigator 
            initialRouteName="ShopTab" 
            screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBar,

        }}>

            <BottomTabs.Screen 
                name="ShopTab" 
                component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="home" size={20} color="black" />
                            <Text> Inicio </Text>
                        </View>
                    ),
                }}
            
            />
            <BottomTabs.Screen
                 name="CartTab" 
                 component={CartNavigator}
                 options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="cart" size={20} color="black" />
                            <Text> Carrito </Text>
                        </View>
                    ),
                 }}
            />


            <BottomTabs.Screen
                 name="OrdersTab" 
                 component={MapNavigator}
                 options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="map" size={20} color="black" />
                            <Text> Tiendas </Text>
                        </View>
                    ),
                 }}
            />

            <BottomTabs.Screen
                 name="AuthTab" 
                 component={AuthNavigator}
                 options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="person-circle" size={20} color="black" />
                            <Text> Login </Text>
                        </View>
                    ),
                 }}
            />
            </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#cc99ff",
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        position: "absolute",
        bottom: 0,
        left:0,
        right:20,
        borderRadius:15,
        height:60,
        width:"100%",

    },

    icon:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        
    }
})

// headerShown en false para sacar la cabecera y titula del stack
// el tabbar por ahora en true, luego en flase para poner iconos
// tabBarStyle, estilos.