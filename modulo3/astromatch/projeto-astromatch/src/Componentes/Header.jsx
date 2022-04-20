import React from "react";
import { AiFillFire } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";



export function Header (props){
    console.log(props);
    return(
        <nav className="navbar">
            
           <MdManageAccounts className="change" dados={props.currentPage} funcao ={props.handleChangeScreen}/>         
            <AiFillFire className="fire" />
            <IoIosChatbubbles className="change" />
          
           
             
      </nav>
         
      

    )
}