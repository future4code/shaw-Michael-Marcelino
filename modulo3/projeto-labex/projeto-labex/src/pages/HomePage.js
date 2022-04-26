import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  
  const goToLisTriPage = () => {
    navigate("/trips/list");
  };
  const goLoginPage =()=>{
    navigate("/login")
 }
 const goToBack =()=>{
    navigate(-1)
 }
  return (
    <div>
      <p>HomePage</p>
      <button onClick={goToLisTriPage}>Ver Viagens</button>
      <button onClick={goLoginPage} >Area Adm</button>
      <button onClick={goToBack} >Voltar</button>
        
    </div>
  );
};
