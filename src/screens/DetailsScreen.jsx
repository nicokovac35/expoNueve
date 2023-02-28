import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect} from "react"
import { useSelector } from "react-redux"


// popToTop para ir a la stack primera
const DetailsScreen = ({ navigation, route  }) => {
    const bread = useSelector (state => state.products.selected)


    useEffect(() => {
        console.log(route.params)
    }, [])

    return (
        <View style={styles.container}>
            <Text> {route.params.name}</Text>
            <Button title="Go to Inicio" onPress={() => navigation.popToTop()} />

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