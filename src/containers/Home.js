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
  const pokename = ["skitty", "pikachu", "ditto", "squirtle"];
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
      <h1 className="header">Pokemon</h1>
      <nav className="nav">
        {pokename.map((name, i) => (
          <div key={i} onClick={() => setPokemon(name)}>
            {name}
          </div>
        ))}
      </nav>
      <div className="img">
        {betterPokemonData.image && (
          <img src={betterPokemonData.image.url} alt="" />
        )}
      </div>
      <h2 className="header1">Pokemon Name:{pokemonData.name}</h2>
      <p className="blurb">{betterPokemonData.blurb}</p>
      <h3 className="content">Pokemon Id: {pokemonData.id}</h3>
      <h4 className="content">Pokemon Height: {pokemonData.height}</h4>
      <h5
        className="content"
        style={{
          backgroundColor: `rgba(100,210,140,${pokemonData.weight / 200})`
        }}
      >
        Pokemon Weight: {pokemonData.weight}
      </h5>
      <div className="attributes">
        {pokemonData.abilities &&
          pokemonData.abilities.map((a, i) => (
            <div key={i}>
              <a src={a.ability}>Pokemon Ability:{a.ability.name}</a>
            </div>
          ))}
      </div>
      <div className="item">
        {pokemonData.held_items &&
          pokemonData.held_items.map((h, i) => (
            <div key={i}>
              <a src={h.item}>Pokemon Items:{h.item.name}</a>
            </div>
          ))}
      </div>
      {Data.map((d, i) => (
        <div>{d.id}</div>
      ))}
    </div>
  );
}
export default Home;
