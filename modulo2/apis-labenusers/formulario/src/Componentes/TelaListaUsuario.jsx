import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUser = styled.div`
    border: white;
    height: 30px;
    width: 350px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between; 
    
`
const Btn = styled.button`
color:gray;
        background-color: rgb(75, 117, 176);
        border-radius: 10px;
`

export default class TelaListaUsuario extends React.Component {
  state = {
    usuarios: []
  }
  componentDidMount() {
    this.pegarUsuario()
  }

  pegarUsuario = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "michael-marcelino-shaw",
        },
      })
      .then((res) => {
        this.setState({ usuarios: res.data })
      })
      .catch((err) => {
        alert("0correu um problema, tente novamente")
      })
  }
  deletarUser=(id)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers:{
        Authorization:"michael-marcelino-shaw"
      }
    })
    .then(()=>{
      alert("Usuario deletado com sucesso")
      this.pegarUsuario()
    })
    .catch(()=>{
      alert("Usuario deletado com sucesso")

    })

  }
  render() {

      const listaUsuario = this.state.usuarios.map((usuario) => {
      return <CardUser key={usuario.id}>
        {usuario.name}
        <Btn onClick={()=>this.deletarUser(usuario.id)}>X</Btn>
        </CardUser>
    })
    return (
      <div>
        <Btn onClick={this.props.irParaCadastro}>Ir pra Cadastro</Btn>
        <h2>Usuario</h2>
       <ul>
       {listaUsuario}
       </ul>
      </div>
    )
  }
}
