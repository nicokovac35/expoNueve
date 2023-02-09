 import { Image, StyleSheet, Text, TouchableOpacity, View,}  from "react-native"
 import React from "react";
 
 const ProductsItem = ({ item, onSelected}) => {
    return (
        <TouchableOpacity 
        style={styles.itemContainer} 
        onPress={() => onSelected(item)}
        >
            
            
            <View style={styles.imageContainer}>      
                    <Image
                        style={styles.image}
                        source={{
                            uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_Black_Star.png/883px-A_Black_Star.png",
                        }}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>${item.price}</Text>
                </View>
        </TouchableOpacity>
    ) 
 }

 export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 10,
        elevation: 5,
    },
    imageContainer: {
        height: "50%",

    },

    textContainer: {
        height:"20%",
    },
    image:{
        height:"100%",
        width:"100%",
    }
 })