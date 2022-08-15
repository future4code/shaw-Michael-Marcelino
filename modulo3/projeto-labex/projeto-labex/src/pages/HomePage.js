import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToList, goToLogin} from "../routes/coordinator";
import styled from "styled-components";
import { Avatar, Button } from "@chakra-ui/react";
import Footer from '../Components/Footer';


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
.photo{
  width: 75rem;
  height: 35rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-bottom: 39px;
    
}

`
export default function HomePage() {
  const navigate= useNavigate()
  useEffect(()=>{
    document.title='LabeX | MD'
  })

  

    return (
      <>
      <NavBar>
        <ul>
            <li><a class="active" href="#home">LabeX | MD</a></li>
          
            <Avatar name='Segun Adebayo' className="avatar"  src='https://bit.ly/sage-adebayo' />
                      
        </ul>
        <section className="btn">
          <Button colorScheme='blue' onClick={() => goToList(navigate)}>Ver Viagens</Button>
          <Button colorScheme='blue' margin={10} onClick={() => goToLogin (navigate)}>Area de ADM</Button>
        </section>
        <img className="photo" src="https://ptspace.pt/wp-content/uploads/2022/03/Agenda_2025_cover-1.jpg" alt="space"></img>
      
      </NavBar>
      <Footer className='rodape'/>
      </>
    );
  }