import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemons } from "./pokeThunk";

const initialState = {
  fetchedPokemons: [],
  pokemons: [],
  currentPokemon: null,
  status: null,
  currentPage: `https://pokeapi.co/api/v2/pokemon`,
  perPage: 10,
  prevPage: null,
  nextPage: null,
};

export const pokeSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFetchedPokemons: (state, action) => {
      state.fetchedPokemons = action.payload;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },
    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      const { payload } = action;
      state.fetchedPokemons = payload;
      state.pokemons = payload;
    });
  },
});

export const {
  setFetchedPokemons,
  setPokemons,
  setCurrentPokemon,
  setStatus,
  setCurrentPage,
  setPerPage,
  setPrevPage,
  setNextPage,
} = pokeSlice.actions;

export default pokeSlice.reducer;
