import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";



const CartItem = ({item, onDelete }) => {
    return (
        <View style={styles.item}>
           <View>
                <Text style={styles.header}>{item.name}</Text>
           </View>
           <View style={styles.detail}>
                <Text>Cantidad:{item.quantity}</Text>
                <Text>$ {item.price}</Text>
           </View>
           <TouchableOpacity onPress={() => onDelete()}>
                <Ionicons  name="trash" size={24} color="red" />
           </TouchableOpacity>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
        item:{
            flex:1,
            padding:8,
            borderBottomColor: "#ccc",
        },
        header: {
            fontSize: 8
        },
        detail:{
            flex:1,
            flexDirection: "row",
            flexWrap:"wrap",
            alignItems:"center",
            justifyContent:"space-between",
        },
})
