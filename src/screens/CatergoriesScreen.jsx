import React from "react";
import {Button, StyleSheet, Text, View, FlatList } from "react-native";
import CategoriesItem  from "../components/CategoriesItem";
import { CATEGORIES } from "../data/categories";

import { useSelector } from "react-redux";




const CategoriesScreen = ({ navigation }) => {

    // useSelector desde redux ahora categorias es desde store y no directamente desde data
    const categories = useSelector((state) => state.categories.categories)

    const handleSeletedCategory = item => {
        navigation.navigate("Products", {
            categoryId :item.id,
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
            <FlatList 
                data={CATEGORIES}
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
     padding:20,
     height:140,
    },
})