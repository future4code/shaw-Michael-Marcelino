import React from "react";



export default class Etapa1 extends React.Component{

    render(){
        
        return(
            <div className="centro">
                <h>Etapa 1</h>
                <p>1.Qual o seu nome?</p>
                <input/>

                <p>2.Qual o sua idade?</p>
                <input/>

                <p>3.Qual o seu email?</p>
                <input/>

                <p>4.Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto </option>
                    <option selected>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>

                </select>
                

                
            </div>
        )
    }
} 