import React,{useState,useEffect} from "react";
import { BsSuitHeartFill, BsXLg, BsStarFill } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export function Botoes (props){
    const choosePerson =(id,boolean)=>{
        const body ={
            id:id,
            choice:boolean,
        }
        axios.post(`${BASE_URL}choose-person`,body)
        .then((res)=>{
            props.getProfileChoose()
        })
        .cath((err)=>{
            alert(err.response.data)
        })
    }
  
    return(
        <div className="actions">
          <div className="action">
              <BsXLg />
          </div>

          <div className="action" onClick={()=>choosePerson(props.profile.id,false)}>
             <BsStarFill />
          </div>

          <div className="action">
              <BsSuitHeartFill onClick={()=>choosePerson(props.profile.id,true)}/>
              
          </div>
          
      </div>
    )
}