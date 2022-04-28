import {useNavigate} from 'react-router-dom'
import { goToBack,goToDetails } from "../routes/coordinator";
import React,{ useState}  from "react";
import axios from 'axios';
import { BASE_URL } from '../Constant/constants';


export const LoginPage =()=> {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body ={
      email: email,
      password: password
    }
    axios.post(`${BASE_URL}login`, body)
  .then((res) => {
      console.log('deu certo',res.data);
      localStorage.setItem('token',res.data.token)
      navigate("/admin/trips/list")
  }).catch((err) => {
    console.log('deu errado', err.response);
  })
  }

  
    return (
      <div>
        <h2>Login</h2>
        <input placeholder="E-mail" type='email' onChange={getEmail} value={email}/>
        <input placeholder="Password" type='password' onChange={getPassword} value={password}/>
        <button onClick={()=>goToBack(navigate)}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
        <button onClick={()=>goToDetails(navigate)}>Details</button>
        
        
      </div>
    );
  }