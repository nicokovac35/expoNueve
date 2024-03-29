import { URL_AUTH_SIGNUP} from "../../constants/Database";

export const SIGNUP = "SIGNUP"

export const signup = (email, password) => {
    return async dispatch => {


        const  response = await fetch(URL_AUTH_SIGNUP, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),

        });

        const data = await response.json()
        console.log(data)

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
        })
    
}

}