import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PokemonList } from "./components/PokemonList";
import { Search } from "./components/Search";
import { Modal } from "./components/Modal";
import { Pagination } from "./components/Pagination";
import { fetchPokemons } from "./store/pokeSlice/pokeThunk";
import "./assets/styles.css";

const App = () => {
  const { currentPage, perPage } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons({ url: currentPage, params: { limit: perPage } }));
  }, [currentPage, perPage]);

  return (
    <div className="wrapper">
      <Search />
      <PokemonList />
      <Modal />
      <Pagination />
    </div>
  );
};

export default App;
