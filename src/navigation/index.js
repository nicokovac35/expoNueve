import React from "react";


import BottomTabNavigator from "./BottomTabNavigator"
import AuthNavigator from "./AuthNavigator";
import ShopNavigator from "./ShopNavigator";
import { useSelector } from "react-redux"


export default  () => { 
    const userId = useSelector(state => state.auth.userId)

    return <>
    {userId 
    ? <BottomTabNavigator /> 
    : <AuthNavigator />}
    </>
}