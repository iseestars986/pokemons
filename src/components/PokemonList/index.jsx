import React from "react";
import { useSelector } from "react-redux";

import { useModal } from "../../hooks/useModal";
import styles from "./PokemonList.module.css";

export const PokemonList = () => {
  const { openModal } = useModal();
  const { pokemons } = useSelector((state) => state.pokemons);

  return (
    <div className={styles.list}>
      {pokemons?.map((item) => {
        const name = item.name;

        return (
          <div onClick={() => openModal(item.id)} className={styles.pokemon}>
            <div key={name}>{name}</div>
            <img
              className={styles.cardImg}
              src={item.sprites.front_default}
              alt="sprite"
            />
          </div>
        );
      })}
    </div>
  );
};
