import React, { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/urls"
import { Header } from "./Header"

export function Matches() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(`${BASE_URL}matches`)
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const mostraMatches = matches.map((match) => {
    return (
      <div key={match.id}>
        <div className="photo-match-cad">
          <img className="foto-match" src={match.photo} alt={match.name} />
          <p>{match.name}</p>
        </div>
      </div>
    )
  })
  return (
    <div>
      <Header />
      <div>
        <div className="photo-and-actions">
          <div className="photo">{mostraMatches}</div>
        </div>
      </div>
    </div>
  )
}
