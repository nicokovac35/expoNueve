import React from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 






// categoriesitem, clase 10

const CategoriesItem = ({ item, onSelected}) => {
    return(
        <View style={{ ...styles.categoriesItem, ...{ backgroundColor: item.color} }}
        
        >
           <TouchableOpacity 
            style={styles.container} 
            onPress={() => onSelected(item)}
            >    
                
                <View style={styles.textContainer}>

                <MaterialCommunityIcons name="star" size={35} color="black" 
                />
                <Text>{item.title}</Text>    
                </View>
                <View style={styles.imageContainer}> 
                    
                    <Image 
                    style={styles.image}
                    source={{
                       uri: item.img,
                    }}
                    
                 />
                </View>
           </TouchableOpacity>
        </View>
    )
}

export default CategoriesItem



const styles = StyleSheet.create({
    categoriesItem:{
        
        flex:1,
        backgroundColor:"#c2d6d6",
        borderRadius:10,
        shadowColor:"black",
        shadowOpacity:0.5,
        shadowOffset:{ width:0, height:2},
        shadowRadius:10,
        elevation:10,
    },
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft: 15,
    },
    textContainer: {
        width:"60%",
        height:"100%",
        backgroundColor:"#c2d6d6", 
        justifyContent:"center",
        alignItems: "center",  
    },
    imageContainer:{
        width:"40%",
        height:"100%",
        backgroundColor:"green",
    },
    image:{
        width:"100%",
        height:"100%",    
    },


    
})