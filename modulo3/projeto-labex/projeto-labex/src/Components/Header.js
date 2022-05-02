import React from "react";
import { Avatar } from "@chakra-ui/react";
import styled from "styled-components";

const NavBar = styled.div`

ul {
  list-style-type: none;
  margin: 5px 2px 0 2px;
  padding: 0;
  overflow: hidden;
   background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


.active {
  background-color:#3182ce;
 
}
.avatar{
  float: right;
}
.btn{
  display: flex;
  justify-content: center;
  align-items: center;
 
}
`

export default function Header(props) {
    
    return(
        <NavBar>
        <ul>
            <li><a  class="active" href="/">LabeX | MD</a></li>
            <li><a onClick={props.criar} href="#//">Criar Viagem</a></li>
            <li><a onClick={props.inscrever} href="/trips/application">Inscrever-se</a></li>
            <li><a  onClick={props.logout} href="#contact">Logout</a></li>
            <li><a  onClick={props.clicar} href="/">voltar</a></li>
          
            <Avatar  name='Segun Adebayo' className="avatar"  src='https://bit.ly/sage-adebayo' />
                      
        </ul>       
      </NavBar>
    )
}