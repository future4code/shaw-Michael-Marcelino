import React, {useState }from "react";
import "./style.css";
import { TelaPrincipal } from './Pages/TelaPrincipal';
import { Trash } from './Componentes/Trash';
import { Header } from './Componentes/Header';
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
      <Header nome={handleChangeScreen}  />    
       {currentPage === "signUp" ? <TelaPrincipal/> : <TelaMatchs/>}   
        <Trash/>
    </div>
  );
}
