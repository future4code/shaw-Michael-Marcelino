import axios from "axios";
import React from "react";
import styled from "styled-components";
const Btn = styled.button`
color:gray;
        background-color: rgb(75, 117, 176);
        border-radius: 10px;
`

export default class TelaCadastraUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  };
  // handle se usa sempre que for criar uma funcao que vai gerenciar um evento
  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "michael-marcelino-shaw",
        },
      })
      .then((res) => {
        alert("Usuario Cadastrado com sucesso");
        this.setState({
           nome: "",
            email: ""
           });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <Btn onClick={this.props.irParaLista}>
          Ir para lista de usuarios
        </Btn>
        <h2> Cadastro</h2>
        <input
          placeholder={"Nome"}
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <input
          placeholder={"Email"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <Btn onClick={this.fazerCadastro}>Cadastrar</Btn>
      </div>
    );
  }
}
