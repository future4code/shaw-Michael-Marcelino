import axios from "axios"
import React from "react"




export default class TelaPrincipal extends React.Component{

    state={
        nome:""
    }

    handleNome =(event)=>{
        this.setState({nome:event.target.value})
    }
    createPlaylist=()=>{
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name:this.state.nome
        }
        axios.post(url,body,{
            headers:{
                Authorization:"michael-marcelino-shaw"
            }
        }).then((res)=>{
            alert("Playlist adicionada com sucesso")
            this.setState({nome:""})
        })
        .catch((err)=>{
           alert(err.response.data.message)
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.props.irParaPlaylist}>ver playlist</button>
                <input 
                value={this.state.nome}
                onChange={this.handleNome}
                placeholder={"Adicione uma nova playlit"}
            
                />
                
                <button onClick={this.createPlaylist}>Adicionar</button>

            </div>
        )
    }
}

   