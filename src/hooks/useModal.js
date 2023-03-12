import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ModalContext } from "../contexts/modalContext";
import { setCurrentPokemon } from "../store/pokeSlice";

export const useModal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const { pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const openModal = (pokemonId) => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);
    dispatch(setCurrentPokemon(pokemon));
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return {
    showModal,
    openModal,
    closeModal,
  };
};
