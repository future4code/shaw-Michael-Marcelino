import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToSubscribe, goToBack } from "../routes/coordinator"
import { BASE_URL } from '../Constant/constants';


export const ListTripsPage = () => {
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
        <p>{trip.planet}</p>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
      </div>
    )
  })

  return (
    <div>
      <p>LisTriPage</p>
      <button onClick={() => goToSubscribe(navigate)}>Inscrever-se</button>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      {rendetTrips}
    </div>
  )
}
