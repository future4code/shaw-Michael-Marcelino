import React, { useState, useEffect } from "react"
import { BsSuitHeartFill, BsXLg, BsStarFill } from "react-icons/bs"
import { BASE_URL } from "../Constants/urls"
import axios from "axios"
import { Header } from "../Componentes/Header"

export function TelaPrincipal(props) {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfileChoose()
  }, [])

  const getProfileChoose = () => {
    axios
      .get(`${BASE_URL}person`)
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }
  const choosePerson = (id, boolean) => {
    const body = {
      id: id,
      choice: boolean,
    }
    axios
      .post(`${BASE_URL}choose-person`, body)
      .then((res) => {
        getProfileChoose()
      })
      .cath((err) => {
        alert(err.response.data)
      })
  }

  return (
    <div>
      <Header />
      <div className="photo-and-actions">
        <div className="photo" >
          <img
            className="photo-match-rad"
            src={profile.photo}
            alt={profile.name}
          />
          <div className="photo-text">
            <div className="photo-name-and-age">
              <h2> {profile.name}</h2>
              <h2 className="arrox">{profile.age} </h2>
            </div>
            <div className="photo-bio">{profile.bio}</div>
          </div>
        </div>
        <div className="actions">
          <div className="action">
            <BsXLg onClick={() => choosePerson(profile.id, false)} />
          </div>

          <div className="action">
            <BsStarFill onClick={() => alert("Voce nao tem super likes!")} />
          </div>

          <div className="action">
            <BsSuitHeartFill onClick={() => choosePerson(profile.id, true)} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
