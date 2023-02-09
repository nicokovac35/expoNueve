import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

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
        <CartItem item={item} onDelete={() => console.log("borrar elemento")}/>
    )



    return( 
        <View>
            <FlatList
                data={CART}
                keyExtractor={item => item.id}
                renderItem={renderCartItem}
            />       
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})