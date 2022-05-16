import React from "react"
import TelaPlalyst from "./Components/TelaPlalyst/TelaPlalyst"
import TelaPrincipal from "./Components/TelaPrincipal/TelaPrincipal"


export default class App extends React.Component {
  state = {
    telaAtual: "principal",
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "principal":
        return <TelaPrincipal irParaPlaylist={this.irParaPlaylist} />
  

      case "playlist":
        return <TelaPlalyst irPrincipal={this.irPrincipal} />

      default:
        return <TelaPrincipal irPrincipal={this.irPrincipal} />
    }
  }
  irPrincipal = () => {
    this.setState({ telaAtual: "principal" })
  }
   irParaMusicas = () => {
    this.setState({ telaAtual: "musica" })
  } 
  irParaPlaylist = () => {
    this.setState({ telaAtual: "playlist" })
  }
  render() {
    return <div>{this.escolheTela()}</div>
  }
}
