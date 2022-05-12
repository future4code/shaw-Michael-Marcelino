import React from "react";
import TelaCadastraUsuario from "./Componentes/TelaCadasatraUsuario";
import TelaListaUsuario from "./Componentes/TelaListaUsuario";

export default class App extends React.Component {
  state = {
    telaAutal: "lista",
  };

  escolheTela =()=>{
    switch(this.state.telaAutal){
      case "cadastro":
        return <TelaCadastraUsuario irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
      default:
        <div>Erro 404 - page not found</div>
    }
  }
  irParaCadastro =()=>{
    this.setState({ telaAutal:"cadastro"})

  }
  irParaLista =()=>{
    this.setState({telaAutal:"lista"})

  }

  render() {
    return (
      <div>
       {this.escolheTela()}
      </div>
    )
  }
}
