import axios from "axios";
import React,{ useEffect, useState }  from "react";
//import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from "styled-components";
import { BASE_URL } from '../Constant/constants';

const Card = styled.div`
  border: 1px solid black;
`


export default function TripDetailsPage () {
    useProtectedPage()
    const [details, setDetails] = useState({})

    const getTripDetail = (id) =>{
        const token= localStorage.getItem('token')

        axios.get(`${BASE_URL}/trip/${id}`,
        {headers:{
            auth: token
        }})
        .then((res) => {
            console.log('deu certo',res.data.trip);
        }).catch((err) =>{
            console.log('deu erro', err.response);
        })
    }
    
        useEffect (() => {  

    },[])
    const render = details.map((trip)=>{
        return(
          <Card>
            
            <p key={trip.id}>{trip.name}</p>
           
  
           
          </Card>
        )
      })

    

    return (
        <>
        <h2>detalhes viagem</h2>
        <p>{render}</p>
        
        </>
    )
}