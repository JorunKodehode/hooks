import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

function FetchData() {
  const [data, setData] = useState(null); // null i placeholder fordi vi ikke har noe data før fetchen henter data.

  useEffect(() => {
    // useEffect function inside the FetchData function.
    // kontrollerer når js skrives, tar inn to prarameter, første funksjon og andre array
    // Fetch logikk her.
    async function getData() {
      // getData inside the useEffect func, inside the FetchData func. anonymouse func?
      const response = await fetch(API_POKEMON); // forespørsel
      const data = await response.json(); // henter data

      console.log(data);
      setData(data);
    }

    getData(); // kaller på funksjonen
  }, []);

  return (
    <div>
      {/* Har vi data? Ja, send ut dette fra map metoden */}
      {/* {data &&
        data.results.map(function (pokemon) {
          <div>{pokemon.name}</div>;
        })} */}

      {/* 
        Liste over Pokemon objekter 
        
      */}

      {data &&
        data.results.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} /> // name={pokemon.name} url={pokemon.url}
        ))}
    </div>
  );
}

export default FetchData;
