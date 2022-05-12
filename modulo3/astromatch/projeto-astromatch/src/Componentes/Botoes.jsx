import React from "react";
import { BsXLg, BsStarFill } from "react-icons/bs";

import { FaRegTrashAlt } from "react-icons/fa";



export function Botoes (){
  
    return(
        
        <div className="actions">
          <div className="action">
              <BsXLg />
          </div>

          <div className="action" >
             <BsStarFill />
          </div>

          <div className="action">
          <FaRegTrashAlt > apagar conexao </FaRegTrashAlt>
              
          </div>
          
       </div>
    )
}