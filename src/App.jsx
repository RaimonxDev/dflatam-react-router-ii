import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Pokemons from "./views/SelectPokemons";
import PokeDetails from "./views/PokeDetails";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import SelectPokemons from "./views/SelectPokemons";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<SelectPokemons />} />
        <Route path="/pokemon/:name" element={<PokeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
