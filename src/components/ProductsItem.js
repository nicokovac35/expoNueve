 import { Image, StyleSheet, Text, View }  from "react-native"
 import React from "react";
 
 const ProductsItem = () => {
    return(
        <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  
                    <Image/>
                </View>

                <View style={styles.textContainer}>
                    <Text>Nombre</Text>
                    <Text>Description</Text>
                    <Text>Precio</Text>
                </View>
        </View>
    )
 }

 export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 10,
        elevation: 5,
    },
    imageContainer: {
        height: "60%",

    },

    textContainer: {
        height:"40%",
    },
    image:{
        height:"100%",
        width:"100%",
    }
 })