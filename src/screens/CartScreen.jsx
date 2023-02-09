import React from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"

import { CART } from "../data/cart"
import CartItem from "../components/CartItem"

const CartScreen = () => {
    const total= 120

    const handleConfirmCart =() => {
        console.log("Confirmar Carrito")
    }

    const handleDeleteItem = () =>{
        console.log("borrar elemento")
    } 

    const renderCartItem =({item}) => (
        <CartItem item={item} onDelete={handleDeleteItem}/>
    )



    return ( 
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={CART}
                    keyExtractor={item => item.id}
                    renderItem={renderCartItem}
                />       
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
                <Text>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:12,
        backgroundColor:"#c2d6d6",
        paddingBottom:100,
    },
    list:{
        flex:1,
    },
    footer: {
        padding:12,
        borderTopColor: "#669999",
        borderTopWidth:1,

    },
    confirm:{
        backgroundColor:"#669999",
        borderRadius:10,
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    total:{
        flexDirection:"row",
    },
    text:{
       
        padding: 8,
    },
})


