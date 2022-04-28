import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLisTriPage,goToBack, goLoginPage } from '../routes/coordinator';

export const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <p>HomePage</p>
      <button onClick={()=>goToLisTriPage(navigate)}>Ver Viagens</button>
      <button onClick={()=>goLoginPage(navigate)} >Area Adm</button>
      <button onClick={()=>goToBack(navigate)} >Voltar</button>
        
    </div>
  );
};
