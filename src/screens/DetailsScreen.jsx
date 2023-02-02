import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"


// popToTop para ir a la stack primera
const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Pantalla Detalles</Text>

            
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