import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [pokemon, setPokemon] = useState("skitty");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const pokename = ["skitty", "pikachu", "ditto"];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(function(response) {
        const data = response.data;
        setPokemon(data);

        console.log("response", response);
      })
      .catch(function(error) {
        console.warn(error);
      });
  }, []);
  console.log("pokemon", pokemon);

  return (
    <div>
      <h1>Pokemon Name</h1>
      {pokename.map((data, i) => (
        <div key={i}></div>
      ))}
      <h2>{pokemon.name}</h2>
      <h3>{pokemon.id}</h3>
      <h4>{pokemon.height}</h4>
      <h5>{pokemon.weight}</h5>
    </div>
  );
}

export default Home;
