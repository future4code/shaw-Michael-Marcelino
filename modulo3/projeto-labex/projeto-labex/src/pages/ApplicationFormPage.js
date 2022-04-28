import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../Constant/constants";

export const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [getTrip, setGetTrip] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [prof, setProf] = useState("");
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [viagem, setViagem] = useState("");
 

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const getProf = (event) => {
    setProf(event.target.value);
  };
  const getText = (event) => {
    setText(event.target.value);
  };
  const getCountry = (event) => {
    setCountry(event.target.value);
  };
  const getViagem = (event) => {
    setViagem(event.target.value);
  };
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = () => {
    axios
      .get(`${BASE_URL}trips`)
      .then((res) => {
        console.log(res.data.trips);
        setGetTrip(res.data.trips,"")
        
      })
      .catch((err) => {
        alert(err.data.trips);
      });
  };

const applyToTrip =(viagem)=>{
    const body ={
        
            "name": name,
            "age": age,
            "applicationText":text ,
            "profession": prof,
            "country": country
        
    }
    axios.post(`${BASE_URL}trips/${viagem}/apply`,body)
    .then((res)=>{
       alert("Usuario cadastrado com sucesso")
       setName("")
       setAge("")
       setCountry("")
       setViagem("")
       setText("")
       setProf("")
        console.log(res.data)
        
    })
    .catch((err)=>{
        console.log(err.data)
    })


}

  return (
    <div>
      <p>Inscreva-se para uma viagem para o centro da terra</p>

      <select onChange={getViagem}>
        <option value={""}>Escolha uma viagem</option>
         {getTrip.map((trip) => {
            return (
            <option key={trip.id} value={viagem}>
                {trip.name}
            </option>
            );
        })}
      </select>
      <br />
      <input type="text" placeholder="Nome" onChange={getName} value={name} />
      <br />
      <input
        type="n   umber"
        placeholder="Idade"
        onChange={getAge}
        value={age}
      />
      <br />
      <input
        type="text"
        placeholder="Profissao"
        onChange={getProf}
        value={prof}
      />
      <br />
      <input
        type="text"
        placeholder="Texto da Candidatura"
        onChange={getText}
        value={text}
      />
      <br />

      <select id="country" name="country" onChange={getCountry} value={country}>
        <option>Escolhe o seu pais</option>
        <option value="AF">Afghanistan</option>
        <option value="AX">Aland Islands</option>
        <option value="AX">Aland Islands</option>
        <option value="IR">Irlanda</option>
        <option value="UA">Ukraine</option>
        <option value="AS">American Samoa</option>
      </select>
      <br />
      
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={applyToTrip} >Inscrever-se</button>
    </div>
  );
};
