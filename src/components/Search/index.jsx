import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPokemons } from "../../store/pokeSlice";
import styles from "./Search.module.css";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const { fetchedPokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const dispatchPokemons = (pokemons) => dispatch(setPokemons(pokemons));

  useEffect(() => {
    if (searchValue) {
      const filteredPokemons = fetchedPokemons.filter((item) =>
        item.name.includes(searchValue)
      );
      dispatchPokemons(filteredPokemons);
    } else {
      dispatchPokemons(fetchedPokemons);
    }
  }, [searchValue]);

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        className={styles.searchInput}
        placeholder="Enter pokemon name..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <span>✓</span>
    </div>
  );
};
