import React from "react";
import {Button, StyleSheet, Text, View, FlatList,ScrollView } from "react-native";
import CategoriesItem  from "../components/CategoriesItem";
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

import Ionicons from "@expo/vector-icons/Ionicons";




const CategoriesScreen = ({ navigation }) => {

    // useSelector desde redux ahora categorias es desde store y no directamente desde data
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const handleSeletedCategory = item => {
        dispatch(selectedCategory(item.id))
        navigation.navigate("Products", {
            //categoryId :item.id,
            title: item.title,
        })
    }


    const renderCategoriesItem = ({ item }) =>(
        <View style={ styles.categoriesContainer}>
            <CategoriesItem item={item} onSelected={handleSeletedCategory} />
        </View>
    )
    
    return(
        <View style={styles.container}>
            <View>
                
            <Ionicons name="star" size={60} color="black" />
            </View>     
            
            <FlatList 
            
                data={categories}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
            />     

          
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    categoriesContainer: {
        flex:1,
     padding:10,
     height:140,
    },
})