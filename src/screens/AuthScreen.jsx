import React, {useState, useEffect, useReducer, useCallback} from "react";

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
import Input from "../components/Input";
import { signup } from "../store/actions/auth.action";



const  FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"


const formReducer = (state, action) => {
    console.log (action)
    if (action.type === FORM_INPUT_UPDATE) {
        const  updateValues = { 
            ...state.inputValues, 
            [action.input] : action.value 
        }
        const updateValidities = {
            ...state.inputValidities, 
            [action.input]: action.isValid,
        }
        let updateFormIsValid = true 
            for (const key in updateValidities) {
                updateFormIsValid = updateFormIsValid && updateValidities[key]
            }    
        return{
            inputValues: updateValues,
            inputValidities : updateValidities,
            formIsValid :  updateFormIsValid,
        }
    }
    return state
}


const AuthScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState ('')
    const [ password, setPassword] = useState ('')
    const [ error, setError] = useState (null)
    
    useEffect(() => {
        if (error) {
            Alert.alert(":( no he podido iniciar sesion",error, [{text:"OK"}])
        }
    }, [error])

    const [formState, dispatchFormState] = useReducer (formReducer,{
        inputValues:{
            email:"",
            password: "",
        },
        inputValidities: {
            email:false,
            password: false,
        },
        formIsValid: false,
    })



    const handleSignUp = () => {
       // dispatch(signup(email, password))
       if  (formState.formIsValid) {
        dispatch(
            signup(formState.inputValues.email, formState.inputValues.password)
        )
        }else {
                Alert.alert("Formulario es INVALIDO! :( , ingrese email  y password valido",[
                    {text: "OK"},
                ])
            }
       }
       
       const onInputChangeHandler = useCallback (
        (inputIdentifier, inputValue, inputValidity) => {
            console.log(inputIdentifier, inputValue, inputValidity)
            dispatchFormState({
                type:FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input : inputIdentifier,
            })
        }, [dispatchFormState]
       )
    





    return (
        <KeyboardAvoidingView behavior="height" style={styles.screen}>
        
        <View style={ styles.container }>
                <Text style={styles.title}>Registrate!</Text>
                    <Input
                        id='email'
                        label="Correo"
                        keyboardType="email-address"
                        requiered
                        email
                        autoCapitalize ="none"
                        errorText="Un Correo Valido :)"
                        onInputChange={ onInputChangeHandler}
                        initialValue=""
                    />
                       <Input
                        id='password'
                        label="password"
                        keyboardType="default"
                        requiered
                        password
                        secureTextEntry
                        autoCapitalize ="none"
                        errorText="Una Contraseña  Valida :/ "
                        onInputChange={ onInputChangeHandler}   
                        initialValue=""
                    />
                             
                     
                
                <Button title= "Registrar Cuenta " onPress={handleSignUp}/>

                
        
              
                

             
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
        backgroundColor:  "black",
        marginVertical: 20,
    },
})