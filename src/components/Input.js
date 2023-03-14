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

const Input = () => {
    return (
        <View>
            <Text> Inpuuut</Text>
        </View>
    )
}

export default Input


const styles = StyleSheet.create({})