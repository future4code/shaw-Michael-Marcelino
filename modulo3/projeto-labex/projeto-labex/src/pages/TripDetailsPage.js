import React,{ useEffect} from "react";
import axios from "axios";
import { BASE_URL } from '../Constant/constants';


export const TripDetailsPage =()=>{
    
    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}trip/Y0Puyvrhc33WvlfQ6fXC`,
        {
            headers:{
                auth: token
            }
        })
        .then((response)=>{
            console.log('Deu certo:',response.data)
            
        })
        .catch((error)=>{
            console.log('Deu error:',error.response)
        })
    },[])
    return(
        <>
        <p>TripDetailsPage</p>        
        </>
    )
}