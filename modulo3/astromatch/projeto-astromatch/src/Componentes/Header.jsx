import React from "react";
import { AiFillFire } from "react-icons/ai";
import { IoIosChatbubbles } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";



export function Header (props){
    
    return(
        <nav className="navbar">            
            <MdSupervisorAccount  className="change"   />         
            <AiFillFire className="fire" />
            <IoIosChatbubbles className="change" />
      
        </nav>
         
      

    )
}