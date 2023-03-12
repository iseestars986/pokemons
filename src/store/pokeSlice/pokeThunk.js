import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonQuerry } from "../../api";
import { setStatus, setNextPage, setPrevPage } from "./index";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async (payload, thunkAPI) => {
    const { url, params } = payload;
    const { dispatch } = thunkAPI;

    try {
      dispatch(setStatus("loading"));

      const data = await pokemonQuerry(url, params);
      const nextPage = data.next?.split("&")[0];
      const prevPage = data.previous?.split("&")[0];

      dispatch(setPrevPage(prevPage));
      dispatch(setNextPage(nextPage));

      const promises = [];

      data.results.forEach((item) => {
        promises.push(pokemonQuerry(item.url));
      });

      const pokemons = Promise.all(promises).then((res) => {
        return res;
      });

      dispatch(setStatus("successful"));

      return pokemons;
    } catch (err) {
      dispatch(setStatus("error"));
    }
  }
);
