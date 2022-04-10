import React from "react";
import styled from "styled-components";


const BotaoEviar= styled.button`
border-radius: 30px;
color: blue;
background-color: grey;

`


function Enviar(){
    return(
        <div>
            <BotaoEviar>enviar</BotaoEviar>
        </div>
    )
}


export default Enviar