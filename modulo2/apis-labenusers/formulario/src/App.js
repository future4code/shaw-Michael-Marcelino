import axios from "axios";
import React from "react";



export default class App extends React.Component {
  state = {
    email: "",
    inputName: "",
  };
  postPlaylist = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Michael-Marcelino-shaw",
          },
        }
      )
      .then((res) => {
        alert('usuario cadastrado com sucesso')
        this.setState({
          inputName: "",
          email:""
         
        });
      })
      .catch((err) => {
        //Alertar caso um erro aconteça
        alert(err.response.data.message);
      });
  };
  onChangeName=(event)=>{
    this.setState({
      inputName:event.target.value
    })

  }
  onChangeEmail=(event)=>{
    this.setState({
      email:event.target.value
    })

  }
  render() {
    return (
      <div className="App">
        <div>
          <a href="./Componentes/TrocaNome.jsx">
            <button>Trocar de tela</button>
          </a>

          <div>
            <input value={this.state.inputName} onChange={this.onChangeName} placeholder="Nome"></input>
            <input value={this.state.email}  onChange={this.onChangeEmail} placeholder="E-mail"></input>
            <button onClick={this.postPlaylist} >Criar Usuario</button>
          </div>
        </div>
      </div>
    );
  }
}
