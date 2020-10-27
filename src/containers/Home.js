import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "../components/data";
function Home() {
  // Name of the currently selected pokemon
  const [pokemon, setPokemon] = useState("skitty"); // type string
  // Data of the queried pokemon
  const [pokemonData, setPokemonData] = useState({}); // type array
  const [betterPokemonData, setBetterPokemonData] = useState({});
  // const [pokemonType, setPokemonType] = useState("");
  const pokename = ["skitty", "pikachu", "ditto"];
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(function(response) {
        const data = response.data;
        setPokemonData(data); // type json object
        console.log("response", response); // what does it look like?
        console.log("Data", Data);
      })
      .catch(function(error) {
        console.warn(error);
      });
    // Get Hardcoded Pokemon Data
    const DataValueForPokemon = Data.find(p => p.id === pokemon);
    setBetterPokemonData(DataValueForPokemon || {});
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
      {betterPokemonData.image && (
        <img src={betterPokemonData.image.url} alt="" />
      )}
      <h2>Pokemon Name: {pokemonData.name}</h2>
      <p>{betterPokemonData.blurb}</p>
      <h3>Pokemon Id: {pokemonData.id}</h3>
      <h4>Pokemon Height: {pokemonData.height}</h4>
      <h5>Pokemon Weight: {pokemonData.weight}</h5>
      {pokemonData.abilities &&
        pokemonData.abilities.map((a, i) => (
          <div key={i}>
            <a href={a.ability.url}>{a.ability.name}</a>
          </div>
        ))}
      {Data.map((d, i) => (
        <div>{d.id}</div>
      ))}
    </div>
  );
}
export default Home;
