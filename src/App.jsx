import CreateParagraph from "./components/CreateParagraph";
import FetchData from "./components/FetchData";
import PokemonCard from "./components/PokemonCard";
import IncrementBtn from "./components/IncrementBtn";
import "./App.css";

function App() {
  return (
    <>
      <FetchData />
      <CreateParagraph />
      <PokemonCard />
      <IncrementBtn />
    </>
  );
}

export default App;
