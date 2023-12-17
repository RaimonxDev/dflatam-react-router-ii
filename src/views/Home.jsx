
import mewPokemon from "../assets/mew.webp";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <section className="home">
      <h2 className="title-home mt-2">Bienvenido Maestro Pokemón</h2>
      <Image className="w-25" src={mewPokemon} alt="mew" />
    </section>
  );
};
export default Home;
