import React, { useState } from "react";


import BottomTabNavigator from "./BottomTabNavigator"
import AuthNavigator from "./AuthNavigator";


export default  () => { 
    const [user, setUSer] = useState(null)

    return <>{user ? <BottomTabNavigator /> : <AuthNavigator />}</>
}