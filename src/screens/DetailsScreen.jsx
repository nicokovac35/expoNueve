import { Button, StyleSheet, Text, View, Image } from "react-native"
import React, { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"



import  { addItem } from "../store/actions/cart.action"

// popToTop para ir a la stack primera
const DetailsScreen = ({ navigation, route  }) => {
    const dispatch = useDispatch ()
    const shoes = useSelector (state => state.products.selected)    


    useEffect(() => {
        console.log(route.params)
    }, [])

    const handleAddItem = () => {
        dispatch(addItem(shoes))
    }

    return (
        <View style={styles.container}>
              <Image 
                    style={styles.image}
                    source={{
                       uri: shoes.img,
                    }}

                />

            <Text>{shoes.name}</Text>
            <Text>{shoes.description}</Text>
            <Text>{shoes.price}</Text>
            <Button title="Agregar al Carrito!" 
                    onPress={handleAddItem} 
            />  
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})