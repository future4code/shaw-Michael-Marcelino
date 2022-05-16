import axios from "axios"
import React from "react"
import { NovoButton } from "./NovoButton"
import { TelaList } from "./styled"
import {BiTrash} from "react-icons/bi"
import{BsSpotify} from "react-icons/bs"
// import {MdSend} from "react-icons/md"


export default class TelaPlalyst extends React.Component{
    state ={
        playlists:[],
        name: "", 
        artist:"",
        url: ""
    }
    componentDidMount(){
        this.getPlaylists()
    }

    getPlaylists=()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url,{
            headers:{
                Authorization:"michael-marcelino-shaw"
            }
        })
        .then((res)=>{
            this.setState({playlists: res.data.result.list})
        })
        .catch((err)=>{
           alert("Ocorreu um erro tente novamente")
        })
    }
     addTrackToPlaylist(id){
         const url= `https://us-central1-l abenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
         const body = {
             name:this.state.name , 
             artist:this.state.artist ,
             url: this.state.url
         }
         axios.post(url,body,{
             headers:{
                 Authorization:"michael-marcelino-shaw"
             }
         })
         .then((res)=>{
             console.log(res.data);
         })
         .catch((err)=>{
             console.log(err.response);
         })
     }
    
    deletePlaylist=(id)=>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url,{
            headers:{
                Authorization:"michael-marcelino-shaw"
            }
        })
        .then((res)=>{
          
            alert("Playlist deletada com sucesso!")
            this.getPlaylists()
        })
        .catch((err)=>{
           alert("Ocorreu um erro tente novamente")

        })
    }
    handleName =(event)=>{
        this.setState({name:event.target.value})
    }
    handleArtist=(event)=>{
        this.setState({artist:event.target.value})
    }
    handleUrl=(event)=>{
        this.setState({url:event.target.value})
    }
   
    render(){
         
        const listaPlaylists =  this.state.playlists.map((lista)=>{
            
            return(
            
            <NovoButton key={lista.id}>
                 {lista.name}
                 <BiTrash onClick={()=>this.deletePlaylist(lista.id)}>remover</BiTrash>
                 <BsSpotify></BsSpotify>
            </NovoButton>

        )})
        return(
            
            <TelaList>
                  
                 
                <button onClick={this.props.irPrincipal}>Ver tela principal</button>
                
                           
               <div>{listaPlaylists}</div>
               {/* <input placeholder={"Nome da musica"} value={this.state.name} onChange={this.handleName}/> 
               <input placeholder={"Nome do artista"}value={this.state.artist} onChange={this.handleArtist}/> 
               <input placeholder={"url"}value={this.state.url} onChange={this.handleUrl}/> 
               <MdSend onClick={()=> this.addTrackToPlaylist()}></MdSend>
                 */}

            </TelaList>
        )
    }
}

   