import React from "react";
import { Header } from "../Componentes/Header";
import { Card } from '../Componentes/Card';
import { Botoes } from '../Componentes/Botoes';

export function TelaPrincipal(props) {

  return (
    <div>
      <Header  dados={props.currentPage} funcao ={props.handleChangeScreen}/>
      <Card  nome={props.nome} trocaTela={()=>props.handleChangeScreen}/>
      <Botoes/>
    </div>
  );
}
