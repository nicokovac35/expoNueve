import { Button, StyleSheet, Text, View } from "react-native";
import React from "react"

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Pantalla Productos</Text>
            <Button 
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
                color=" #EDF"
            />

            <Button title="Go Back" onPress={() => navigation.goBack()} />

        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})