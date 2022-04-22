import React from "react";
import { Header } from "../Componentes/Header";
import { Card } from '../Componentes/Card';
import { Botoes } from '../Componentes/Botoes';

export function TelaPrincipal(props) {

  return (
    <div>
      <Header/>
      <Card/>
      <Botoes />
    </div>
  );
}
