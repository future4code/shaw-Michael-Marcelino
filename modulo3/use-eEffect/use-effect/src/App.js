import React, { useState, useEffect } from "react"
import "./styles.css"
import axios from "axios"
import PokeCard from "./PokeCard"

export default function App (){
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeNome] = useState("")

  const pegaPokemon = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results)
        
      })
      .catch((err) => {
        alert(err.response)
      })
  }

  const changePokeName = (event) => {
    setPokeNome(event.target.value)
  }
  useEffect(() => {
    pegaPokemon(pokeName)
  }, [pokeName])

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )
}


