import { useDispatch, useSelector } from "react-redux";

import { setPerPage } from "../../store/pokeSlice";
import { setCurrentPage } from "../../store/pokeSlice";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  const { prevPage, nextPage } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const onPerPageChange = (perPage) => dispatch(setPerPage(perPage));

  const onChangePage = (page) => dispatch(setCurrentPage(page));

  return (
    <div className={styles.bottomBlock}>
      {prevPage ? (
        <button onClick={() => onChangePage(prevPage)}>Previous</button>
      ) : (
        <div />
      )}
      <div className={styles.pokemonsPerPage}>
        <button onClick={() => onPerPageChange(10)}>10</button>
        <button onClick={() => onPerPageChange(20)}>20</button>
        <button onClick={() => onPerPageChange(50)}>50</button>
      </div>
      {nextPage ? (
        <button onClick={() => onChangePage(nextPage)}>Next</button>
      ) : (
        <div />
      )}
    </div>
  );
};
