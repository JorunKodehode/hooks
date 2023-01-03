import { useState, useEffect } from "react";

function PokemonCard(props) {
  const [pokemonDetailes, setPokemonDetailes] = useState(null);
  console.log(pokemonDetailes);
  // kontrollerer når js skrives, tar inn to parameter, første funksjon og andre array
  // Fetch logikk her.
  useEffect(() => {
    async function getData() {
      const response = await fetch(API_POKEMON); // forespørsel
      const data = await response.json(); // henter data
      setPokemonDetailes(data);
    }

    getData(); // kaller på funksjonen
  }, []);

  return (
    <div>
      <h1>{props.name}</h1>
      {pokemonDetailes && <img src={pokemonDetailes.sprites.front_default} />}
    </div>
  );
}

export default PokemonCard;
