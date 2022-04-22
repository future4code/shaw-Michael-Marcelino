
import React,{useState,useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export function Card (props){
    const [profile, setProfile] = useState({})
    

  useEffect(()=>{
   getProfileChoose()

  },[])


 const getProfileChoose =()=> {
   axios
     .get(`${BASE_URL}person`)
     .then((res) => {
       setProfile(res.data.profile)
     })
     .catch((error) => {
       alert(error.response.data)
     })
 }
    return(
        <div className="photo-and-actions">
            <div className="photo">
                <div className="photo-text">
                    <div className="photo-name-and-age">
                    <img className="arrox-doce"  src={profile.photo} alt={profile.name}/>
                    <h2> {profile.name}</h2>
                    <h2>{profile.age}</h2>
                    </div>
                    <div className="photo-bio">
                    {profile.bio} </div>
                </div>
            </div>
       
    </div>

    )
}