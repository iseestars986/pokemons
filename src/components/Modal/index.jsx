import { useSelector } from "react-redux";

import { useModal } from "../../hooks/useModal";
import styles from "./Modal.module.css";

export const Modal = () => {
  const { closeModal, showModal } = useModal();
  const { currentPokemon } = useSelector((state) => state.pokemons);

  return (
    <>
      {showModal && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div className={styles.statsBlock}>
              <div className={styles.modalHeaderLine}>
                <h2 className={styles.pokemonName}>{currentPokemon.name}</h2>
                <h2 className={styles.closeBtn} onClick={closeModal}>
                  ❌
                </h2>
              </div>
              <img
                src={currentPokemon.sprites.front_default}
                className={styles.modalImage}
                width={260}
                alt="sprite"
              />
              <div className={styles.stats}>
                <h4>height : {currentPokemon.height}</h4>
                <h4>weight : {currentPokemon.weight}</h4>
                {currentPokemon.stats.map((item) => (
                  <h4>
                    {item.stat.name} : {item.base_stat}
                  </h4>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
