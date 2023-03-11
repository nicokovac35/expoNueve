import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect} from "react"
import { useSelector } from "react-redux"


// popToTop para ir a la stack primera
const DetailsScreen = ({ navigation, route  }) => {
    const shoes = useSelector (state => state.products.selected)


    useEffect(() => {
        console.log(route.params)
    }, [])

    return (
        <View style={styles.container}>
            <Text>{shoes.name}</Text>
            <Text>{shoes.description}</Text>
            <Text>{shoes.price}</Text>
            <Button title="Add to cArt!" onPress={() => console.log("agregado al carrito")} />  
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