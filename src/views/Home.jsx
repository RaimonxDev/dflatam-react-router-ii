
import mewPokemon from "../assets/mew.webp";
import { Image } from "react-bootstrap";
import SelectPokemons from "./SelectPokemons";

const Home = () => {
  return (
    <section className="pokeball">
      <h2 className="title-home mt-2">Bienvenido Maestro Pokemón</h2>
      <Image className="w-25" src={mewPokemon} alt="pokeball" />
    </section>
  );
};
export default Home;
