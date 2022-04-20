import React from "react";
import { BsSuitHeartFill, BsXLg, BsStarFill } from "react-icons/bs";

export function Botoes (){
    return(
        <div className="actions">
          <div className="action">
              <BsXLg />
          </div>

          <div className="action">
             <BsStarFill />
          </div>

          <div className="action">
              <BsSuitHeartFill />
          </div>
      </div>
    )
}