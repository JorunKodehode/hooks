import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

function FetchData() {
  const [data, setData] = useState(null); // null i placeholder fordi vi ikke har noe data før fetchen henter data.

  useEffect(() => {
    // kontrollerer når js skrives, tar inn to prarameter, første funksjon og andre array
    // Fetch logikk her.
    async function getData() {
      const response = await fetch(API_ENDPOINT); //forespørsel
      const data = await response.json(); // henter data

      console.log(data);
      setData(data);
    }

    getData(); // kaller på funksjonen
  }, []);

  return (
    <div>
      {data && // sjekker etter data
        data.results.map(
          (pokemon, index) => (key = index),
          <div>{pokemon.name}</div>
        )}
    </div>
  );
}

export default FetchData;
