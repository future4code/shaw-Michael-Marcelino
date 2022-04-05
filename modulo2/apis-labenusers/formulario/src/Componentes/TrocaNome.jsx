import React from "react";
import "./App.css";

function TrocaNome() {
  return (
    <div className="App">
       <div>
         <button>Troca Tela</button>
       </div>
       <div>
          <div>
            <ul>
              <li></li>
            </ul>
            <hr></hr>
            <h4>Procurar usuário</h4>
            <input placeholder="Nome exato para busca" type="text" value=""></input>
            <button>Salvar edição</button>
          </div>
       </div>
          
      
     
    </div>
  );
}

export default TrocaNome;
