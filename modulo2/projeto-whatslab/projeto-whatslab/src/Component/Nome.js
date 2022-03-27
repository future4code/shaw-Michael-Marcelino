import React from "react";
import styled from 'styled-components'

const Tela = styled.div`
  border: 2px solid black;
  width: 40%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: 2%;
  background-image: url(https://i.pinimg.com/originals/62/40/b6/6240b66d5c50c8661eee78b439a7d33c.jpg);
  
`
const Primeiro = styled.input`
font-weight: bold;
width: 18%;
`

const Segundo = styled.input`

width: 60%;
`

class Inputs extends React.Component {
  state = {
    pessoas: [
      {
        nome: "",
        mensagem: "",
      
      }

    ],
    
    valorInputPessoa: "",
    valorInputMensagem: "",
   
  };

  onChangeInputPessoa = (event) => {
  
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  

  adicionaPessoa = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaPessoa = {
      // Puxamos de state as propriedades "valorInput..." o nome dela
      nome: this.state.valorInputPessoa,
      mensagem: this.state.valorInputMensagem
      
    };

    // Copia (faz espelhamento) array de 'pessoas' e adiciona uma nova pessoa no final
    const novoPessoas = [...this.state.pessoas, novaPessoa];

    // Define 'pessoas' de state como a variavel 'novoPessoas'
    this.setState({ pessoas: novoPessoas });
    this.setState({ valorInputPessoa: "", valorInputMensagem: "", valorInputTelefone: ""})
  };


  render() {
    
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p> {pessoa.nome}  {pessoa.mensagem}   </p>
      );
    });

    return (
        <Tela>
        <div>
          <Primeiro
            placeholder={"Nome"}
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
          />
          <Segundo
             placeholder={"Mensagem"}
             value={this.state.valorInputMensagem}
             onChange={this.onChangeInputEmail}
          />
          
          <button onClick={this.adicionaPessoa}>Enviar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </Tela>
    );
  }
}

export default Inputs;
