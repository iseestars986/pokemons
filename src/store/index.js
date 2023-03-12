import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokeSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokeReducer
  },
});
