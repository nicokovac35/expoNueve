import React, { useCallback, useEffect, useReducer, useState } from "react";


import { 
StyleSheet,  
Text,  
View, 
KeyboardAvoidingView, 
TouchableOpacity,
TextInput,
Button,
Alert,
} from "react-native";

import { useDispatch } from "react-redux";
import { signup } from "../store/actions/auth.action";
import Input from "../components/Input";
import { ShopNavigator } from "../navigation/ShopNavigator"

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action ) => {
    console.log (action)
        if(action.type === FORM_INPUT_UPDATE){
            const updatedValues = {
                ...state.inputValues,
                [action.input] : action.value
            } 
            const updatedValidities = {
                ...state.inputValidities,
                [action.input]: action.isValid, 
            }
            let updateFormIsValid = true 
                for (const key in updatedValidities){
                    updateFormIsValid = updateFormIsValid && updatedValidities [key]
        }
        return{
            inputValues : updatedValues,
            inputValidities : updatedValidities,
            formIsValid : updateFormIsValid, 
        }
    }
        return state
}


const AuthScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState ("")
    const [ password, setPassword] = useState ("")
    const [error, setError] = useState(null)

    useEffect(() => {
        if (error){
            Alert.alert("Ha ocurrrido un error", error, [{text:"OK"}])
        }
    }, [error])

    const [ formState, dispatchFormState ] = useReducer (formReducer,{
        inputValues: {
            email:"",
            password:"",
        },
        inputValidities:{
            email:false,
            password:false,
        },
        formIsValid:false,
    })

    const handleSignUp = () => {
        dispatch(signup(email, password))
        if (formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password))
        }else{
            Alert.alert("Formulario invalido", "ingresa email y contraseña valida",[
                {text: "OK"}
            ])
        }

        // const handleSkipUser = () => {
    //     dispatch(skipuser (skip))
    // }    
    }



    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) =>{
        console.log(inputIdentifier, inputValue, inputValidity)
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input : inputIdentifier, 
        })
    }, [dispatchFormState]
    )
    
    return (
        <KeyboardAvoidingView behavior="height" style={styles.screen}>
        
        <View style={ styles.container }>
                <Text style={styles.title}>Hola!</Text>
                
                <Input
                    id="email"
                    label="Email"
                    KeyboardType="email-address"
                    requiered
                    email
                    autoCapitalize="none"
                    errorText="Porfa ingresa un correo valido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />

                <Input
                    id="password"
                    label="password"
                    KeyboardType="default"
                    requiered
                    password
                    secureTextEntry 
                    autoCapitalize="none"
                    errorText="Porfa ingresa un correo valido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <Button title= "Registrarme pls" onPress={handleSignUp}/>


                
        
              
                

             
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