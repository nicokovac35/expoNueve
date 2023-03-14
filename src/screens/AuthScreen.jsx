import React, { useState } from "react";

import { 
StyleSheet,  
Text,  
View, 
KeyboardAvoidingView, 
TouchableOpacity,
TextInput,
Button,
} from "react-native";

import { useDispatch } from "react-redux";
import { signup } from "../store/actions/auth.action";

const AuthScreen = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState ("")
    const [ password, setPassword] = useState ("")

    const handleSignUp = () => {
        dispatch(signup(email, password))
    }
    
    return (
        <KeyboardAvoidingView behavior="height" style={styles.screen}>
        
        <View style={ styles.container }>
                <Text style={styles.title}>Hola!</Text>
                <Text> Email </Text>
                <TextInput 
                    keyboardType="email-addres" 
                    autoCapitalize="none" 
                    value={email}  
                    onChangeText={setEmail}
                    />
                <Text> Contraseña </Text>
                <TextInput 
                    secureTextEntry 
                    autoCapitalize="none" 
                    value={password} 
                    onChangeText={setPassword}  
                    />
                    <Button
                    title="Registrate"
                    onPress={(handleSignUp)}
                    />

            <View style={styles.prompt}>     
                <TouchableOpacity 
                    onPress={() => console.log("ingresarres")}
                    style={styles.button}
                >
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