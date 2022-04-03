import React from "react";
import Etapa1 from "./Componentes/Etapa-1";
import Etapa2 from "./Componentes/Etapa-2";
import Etapa3 from "./Componentes/Etapa-3";
import Final from "./Componentes/Final";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };
  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  renderizaEtapa = () => {
    
  };

  render() {
    let pagina;
    switch (this.state.etapa) {
      case 1:
        pagina = <Etapa1 />;
        break;

      case 2:
        pagina = <Etapa2 />;
        break;

      case 3:
        pagina = <Etapa3 />;
        break;

      case 4:
        pagina = <Final />;
        break;

      default:
        return <p>Erro 404 Page not Found</p>;
    }

    return (
      <div>
        {this.renderizaEtapa()}
        {pagina}
        {this.state.etapa <= 3 &&
        <button onClick={this.irParaProximaEtapa}> Proxima etapa</button>
      } 
      </div>
        
    );
  }
}
