import React, { useReducer, useEffect} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE"
const INPUT_BLUR = "INPUT_BLUR"

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return{
                ...state,
                value: action.value,
                isValid: action.isValid,
            }
        case INPUT_BLUR:
            return{
                ...state,
                touched: true,
            }

        default:
            return state
        }

}

// LOG  {"error": {"code": 400, "errors": [[Object]], "message": "MISSING_CUSTOM_TOKEN"}}

const Input = ({onInputChange, initialValue, initialValid, requiered, email, max, minlength, label,errorText, ...props }) => {
    const [ inputState, dispatch] = useReducer (inputReducer,{
       value: initialValue ? initialValue : "",
       isValid: initialValid,
       touched:false, 
    })

    useEffect (() => {
        if (inputState.touched) {
            onInputChange (inputState.value, inputState.isValid)
        }  
            },[inputState, onInputChange])
            
    const textChangeHandler = text => {
        const emailRegex =
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
        let isValid = true


        if (requiered && text.trim().length === 0 ) isValid = false
        if( email && !emailRegex.test(text.toLowerCase())) isValid = false 
        if (max !== null && text.length > max ) isValid = false
        if (minlength !==  null && text.length < minlength) isValid = false
   
        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid,
        })
   
    }

    const onBlurHandler = () => {
        dispatch({type: INPUT_BLUR})
    }

 


    return(
        <View style={styles.formControl}>
            <Text style={styles.label}> {label} </Text>
            <TextInput 
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={onBlurHandler}
               
            />
            {!inputState.isValid && inputState.touched && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            )}
        </View>
    )

}

export default Input
const styles = StyleSheet.create({
    formControl:{
        width:"100%"
    },
    label: {
        marginVertical: 8
    },
    input: {
        paddingHorizontal:2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    errorContainer:{
        marginTop:6,
        marginBottom:8,
    },
    errorText:{
        color:"#ff0000",
    },  
})