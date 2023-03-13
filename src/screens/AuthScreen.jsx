import { 
StyleSheet,  
Text,  
View, 
KeyboardAvoidingView, 
TouchableOpacity,
TextInput,
} from "react-native";

import React from "react";

const AuthScreen = () => {
    return (
        <KeyboardAvoidingView behavior="height" style={styles.screen}>
        <View style={ styles.container }>
                <Text style={styles.title}>Registros</Text>
                <Text> Formulario </Text>
            <View style={styles.prompt}>
                <Text style={styles.promptMessage}> Ya tenes una cuenta!? </Text>
                     <TouchableOpacity onPress={() => console.log("ingresarres")}>
                <Text style={styles.promptButton}>Ingresar</Text>
                </TouchableOpacity> 
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}


export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:24,
        marginBottom:18,
        textAlign: 'center',
    },
    container: {
        width:"80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    prompt: {
        alignItems:"center",
    },
    promptMessage: {
        fontSize:16,
        color:"#333",
    },
    promptButton: {
        fontSize:16,
    },
    button: {
        backgroundColor:  "#ccc",
        marginVertical: 20,
    },
})