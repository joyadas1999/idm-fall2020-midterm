import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "../components/data";
function Home() {
  // Name of the currently selected pokemon
  const [pokemon, setPokemon] = useState("skitty"); // type string
  // Data of the queried pokemon
  const [pokemonData, setPokemonData] = useState({}); // type object
  // const [pokemonType, setPokemonType] = useState("");
  const pokename = ["skitty", "pikachu", "ditto"];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(function(response) {
        const data = response.data;
        setPokemonData(data); // type json object
        console.log("response", response); // what does it look like?
      })
      .catch(function(error) {
        console.warn(error);
      });
  }, [pokemon]);
  return (
    <div>
      <h1>Pokemon</h1>
      <nav>
        {pokename.map((name, i) => (
          <div key={i} onClick={() => setPokemon(name)}>
            {name}
          </div>
        ))}
      </nav>
      <h2>Pokemon Name: {pokemonData.name}</h2>
      <h3>Pokemon Id: {pokemonData.id}</h3>
      <h4>Pokemon Height: {pokemonData.height}</h4>
      <h5>Pokemon Weight: {pokemonData.weight}</h5>
    </div>
  );
}
export default Home;
