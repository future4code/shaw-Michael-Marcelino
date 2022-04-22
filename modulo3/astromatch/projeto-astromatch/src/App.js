import React, {useState }from "react";
import "./style.css";
import { TelaPrincipal } from './Pages/TelaPrincipal';
import { TelaMatchs } from './Pages/TelaMatchs';

export default function App() {
  
  const [currentPage, setCurrentPage] = useState("signUp")

  const  handleChangeScreen =()=>{
    if(currentPage === 'signUp'){
      setCurrentPage('matchs')
    }else{
      setCurrentPage('signUp')
    }  
  }
 
  return (
    <div>

         
        <button  onClick ={handleChangeScreen} >Trocar de tela</button> 
       {currentPage === "signUp" ? <TelaPrincipal/> : <TelaMatchs/>}  
        
    </div>
  );
}
