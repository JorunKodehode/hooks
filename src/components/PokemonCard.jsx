import { useState, useEffect } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
function PokemonCard(props) {
  const [pokemonDetailes, setPokemonDetailes] = useState(null);

  useEffect(() => {
    // kontrollerer når js skrives, tar inn to prarameter, første funksjon og andre array
    // Fetch logikk her.
    async function getData() {
      const response = await fetch(API_ENDPOINT); // forespørsel
      const data = await response.json(); // henter data

      console.log(data);
      setData(data);
    }

    getData(); // kaller på funksjonen
  }, []);

  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={pokemonDetailes && pokemonDetailes.sprities.front_default}
        alt=""
      />
    </div>
  );
}

export default PokemonCard;
