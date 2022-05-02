import {useNavigate} from 'react-router-dom'
import { goBackHome} from "../routes/coordinator";
import React,{ useState }  from "react";
import axios from 'axios';
import { BASE_URL } from '../Constant/constants';


export default function LoginPage() {
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
    axios.post(`${BASE_URL}trips`, body)
  .then((res) => {
      console.log('deu certo',res.data.token);
      localStorage.setItem('token', res.data.token)
      navigate("/admin/trips/list") 
      
  }).catch((err) => {
    console.log('deu certo', err.response);
  })
  }

  
    return (
      <div>
        <h2>Login</h2>
        <input placeholder="E-mail" type='email' onChange={getEmail} value={email}/>
        <input placeholder="Password" type='password' onChange={getPassword} value={password}/>
        <button onClick={() => goBackHome(navigate)}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
       
        
        
      </div>
    );
  }