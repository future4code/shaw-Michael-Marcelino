import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Constant/constants";
import axios from "axios";
import { goToDetailPage, goToLogout, goToCreateTtip, goToBack } from "../routes/coordinator";


export const AdminHomePage =()=>{
    const navigate = useNavigate()
    const [getTrip, setGetTrip] = useState([])

    useEffect(() => {
        getTrips()
      }, [])
    
    const getTrips = () => {
        axios
          .get(`${BASE_URL}trips`
          )
          .then((res) => {
            console.log(res.data.trips)
            setGetTrip(res.data.trips)
          })
          .catch((err) => {
            alert(err.data.trips)
          })
      }
      const rendetTrips = getTrip.map((trip) => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        )
      })

  
    return(
        <>
               <p>AdminHomePage</p>
               <p>Painel Adm</p>
               <button onClick={goToBack(navigate)} >Voltar</button>
               <button onClick={()=>goToCreateTtip(navigate)} >Criar Viagem</button>
               <button onClick={()=>goToLogout(navigate)}>Logout</button>
               <button onClick={()=>goToDetailPage(navigate)}>Levis</button>
               {rendetTrips}
     
     
        </>
    )
}