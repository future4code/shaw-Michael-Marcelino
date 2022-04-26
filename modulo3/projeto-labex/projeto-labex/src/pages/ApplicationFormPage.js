import React from "react";
import { useNavigate } from "react-router-dom";

export const ApplicationFormPage =()=>{
    const navigate =useNavigate()
    const goToSubscribe =()=>{
        navigate("/trips/application")
    }
    const goToBack =()=>{
        navigate(-1)
     }
    
    return(
        <div>
        <p>ApplicationFormPage</p>
        <button onClick={goToBack} >Voltar</button>
        <button onClick={goToSubscribe} >Inscrever-se</button>
     
        </div>
    )
}