import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react"
import ProductsItem from "../components/ProductsItem";
import { PRODUCTS } from "../data/products"


const ProductsScreen = ({ navigation, route }) => {

    // filtro de los productos por categoria, new products luego se pone en data con el flatlist
    const newProducts = PRODUCTS.filter(
        product => product.category === route.params.categoryId
        )
        // Producto ---> detalles
    const handleSelectProduct = (item) =>{
        navigation.navigate("Details",{
            name:   item.name,

        })
    }


    const renderProductItem = ({item}) => ( 
        <ProductsItem item={item} onSelected={handleSelectProduct} />

    )
    
    return (
          
            <FlatList 
            data={ newProducts }
            renderItem ={renderProductItem} 
            keyExtractor= {item => item.id}
            numColumns={2}
            />
       
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productsContainer : {
        height:200,
        width:150,
    }
})