import React from "react";
import { useNavigate } from "react-router-dom";



export  const LoginPage =()=>{
    const navigate = useNavigate()
     const goToAdminHomePage =()=>{
        navigate("admin")
     }
     const goToBack =()=>{
        navigate(-1)
     }
    return(
        <>
         <p>AdminHomePage</p>
         <button onClick={goToAdminHomePage} >Entrar</button>
         <button onClick={goToBack} >Voltar</button>
        
        </>
    )
}