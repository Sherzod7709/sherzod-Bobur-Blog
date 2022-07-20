import { createContext, useEffect, useState } from "react";
import App from "../App";
import UnAuthApp from "../unauth-app";

export const AuthContex = createContext()

const AuthProvider = () => {
    const [ token , setToken ] = useState(localStorage.getItem("token"))
    useEffect(()=>{
        if(token) {
            localStorage.setItem("token",token)
        }
    },[token])
    return (
        <AuthContex.Provider value={ {token, setToken} }>
            {token ? <App/> : <UnAuthApp />}
        </AuthContex.Provider>
    )
}
export default AuthProvider