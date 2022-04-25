import React, {useState }from "react";
import "./style.css";
import { TelaPrincipal } from './Pages/TelaPrincipal';
import { TelaMatchs } from './Pages/TelaMatchs';
import { IoIosChatbubbles } from 'react-icons/io';






export default function Home(props) {
  
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
       <IoIosChatbubbles  onClick ={handleChangeScreen} >Trocar de tela</IoIosChatbubbles> 
       {currentPage === "signUp" ? <TelaPrincipal/> : <TelaMatchs/>}   
        
    </div>
  );
}
